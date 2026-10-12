# Horizon VII — Build Spec (ESP-agnostic)

Everything an operator needs to build this in Mailchimp, Brevo, Zoho Campaigns, HubSpot, Klaviyo, Customer.io or a Zapier + Google Sheets rig.

---

## 1. Contact properties to create

| Property | Type | Set by | Used for |
|---|---|---|---|
| `first_name` | text | import / form | Merge tags |
| `last_name` | text | import / form | Merge tags (`Dear Dr. {{last_name}}`) |
| `salutation` | text | import | `Dr.` / `Mr.` / `Ms.` — **do not hardcode "Dr."** across the whole list |
| `role` | picklist | form | Med onc · Surg onc · Radiation onc · Resident · Nurse · Pharmacist · Industry · Patient/caregiver · Other |
| `institution` | text | form | Segmentation, post-event reporting |
| `entry_segment` | picklist | import | S1–S7 |
| `track` | picklist | automation | M / R / C / O / N / P / U |
| `registered` | boolean | form submit | Master exit condition |
| `reg_date` | datetime | form submit | Reporting |
| `zoom_join_link` | url | Zoom API | Unique per registrant |
| `question_submitted` | boolean | form | Q&A curation |
| `zoom_joined` | boolean | Zoom post-event | X1 vs X2 routing |
| `minutes_attended` | number | Zoom post-event | Certificate eligibility (≥60) |
| `replied` | boolean | inbox rule | **Pauses all automation** |
| `reply_intent` | picklist | manual tag | 1–6, see Track P playbook |
| `last_open_at` | datetime | ESP | Track N logic |
| `last_click_at` | datetime | ESP | Track C/O logic |
| `sends_7d` | number | ESP | Frequency cap |
| `status` | picklist | automation | active · sunset · suppressed |

---

## 2. Automation rules (restated as build steps)

Full trigger table lives in `01-campaign-plan.md` §5a. Build order:

**Step 1 — Suppression list first.** Import every past unsubscribe, hard bounce and complaint *before* the first send. Suppression takes priority over every other rule in the system.

**Step 2 — Exit conditions before entry conditions.** In every automation, configure the exits first:
- Global exit from ALL promo automations: `registered = true` OR `replied = true` OR `status = suppressed`
- Track C exit: `registered = true`
- Track O exit: `clicked = true` OR `registered = true`
- Track N exit: `opened = true`

Building entries before exits is how someone ends up getting "you were thirty seconds away" four hours after they registered.

**Step 3 — Reply detection.** Most ESPs don't do this natively. Options:
- Reply-to goes to a Google Workspace inbox → Zapier watches for new mail → matches sender email against the list → sets `replied = true` → fires P0 → creates a task.
- Or: whoever staffs the inbox tags manually twice a day, 09:00 and 17:00 IST. Manual is fine on a list of this size; *not doing it at all* is not.

**Step 4 — Frequency cap** as a global send-time condition: `IF sends_7d >= 3 AND registered = false THEN delay 24h`.

**Step 5 — Zoom sync.** Post-event, export the Zoom attendee report and update `zoom_joined` and `minutes_attended` within 12 hours. X1 and X2 both go out at T+1 11:00, so the data must be in by T+1 08:00.

---

## 3. UTM scheme

```
?utm_source=email
&utm_medium=campaign
&utm_campaign=hzn7_crc_sep26
&utm_content={{email_id}}          e.g. m5_cases, o1_timing_topic, r7_join_now
&utm_term={{track}}                e.g. main, registered, opened_noclick
```

Keeps every email in the set separately attributable, so you learn which angle converted — which is the whole point of running M2/M5/M6 as different arguments.

---

## 4. Link inventory

| Placeholder | What it points to | Notes |
|---|---|---|
| `{{registration_url}}` | Registration form | 4 fields max |
| `{{shareable_registration_link}}` | Same form, `utm_content=referral` | For R0/R2 forwarding |
| `{{zoom_join_link}}` | Zoom personalised join link | Per-registrant, never a shared link |
| `{{question_form_url}}` | Q&A submission form | 1 field + optional name |
| `{{preference_centre_url}}` | Fewer / Horizon-only / unsubscribe | Required on every send |
| `{{unsubscribe_url}}` | One-click | Also as `List-Unsubscribe` header |
| `{{recording_url}}` | Post-event recording | Gate decision made before T-0 |
| `{{certificate_url}}` | Certificate generator | ≥60 min attendance |
| `{{waitlist_url}}` | Edition VIII waitlist | Live from T+1 |
| `{{patient_support_link}}` | Jarurat Care patient services | Track P intent 5 |

---

## 5. Deliverability pre-flight

- [ ] SPF, DKIM, DMARC all pass on the sending domain — verify with a test send to a Gmail account and check "Show original"
- [ ] Dedicated sending subdomain, warmed if new (start with S1 — the warmest segment — before touching S5)
- [ ] `List-Unsubscribe` and `List-Unsubscribe-Post` headers set (Gmail and Yahoo require these for bulk senders)
- [ ] First send goes to S1 (past attendees) only. Their engagement builds reputation before the cold list ever gets touched. **Never open a campaign by mailing the coldest segment.**
- [ ] Text-to-image ratio sensible; every email readable with images blocked
- [ ] No link shorteners (bit.ly in a medical email is a spam-filter magnet)
- [ ] Plain-text alternative generated for every HTML email
- [ ] Seed test across Gmail, Outlook/O365, Yahoo, and at least one hospital domain before each major send

---

## 6. Dark-mode and mobile

Roughly 60–70% of these opens will be on a phone, a good share in dark mode.

- Logo and faculty photos: PNG with a transparent background will invert badly — put them on a solid light card that stays light in dark mode
- Minimum 16px body text
- CTA button: minimum 44px tall, full-width on mobile, high contrast in both modes
- The agenda table in M3 and R5: build as a stacked list on mobile, not a scrolling table
- Test every send in dark mode before it goes out

---

## 7. WhatsApp / SMS layer (optional, high leverage in India)

Email alone under-delivers reminders to Indian clinicians. If consent exists:

| When | Channel | Message |
|---|---|---|
| On registration | WhatsApp | Confirmation + join link + calendar |
| T-1, 19:00 | WhatsApp | "Horizon VII tomorrow, 7 PM IST. Your link: {{link}}" |
| T-0, 18:45 | WhatsApp | "Starting in 15 minutes: {{link}}" |

**Only to contacts who explicitly opted in on the registration form**, with a clear opt-out in every message. This layer typically adds 10–15 percentage points to registration→attendance.

---

## 8. Kill switches

Stop the campaign and investigate if any of these trip:

| Signal | Threshold | Action |
|---|---|---|
| Spam complaint rate on one send | >0.1% | **Stop all sends.** Investigate list source. |
| Unsubscribe rate on one send | >0.5% | Hold next send, rewrite |
| Hard bounce rate on one send | >2% | Stop, clean the list, re-verify |
| Delivery rate | <95% | Stop, check authentication and reputation |
| Any faculty cancellation | — | Pause sends naming that faculty; re-cut copy within 24h |
| Zoom capacity reached | — | Switch CTA to waitlist, update all queued sends |
