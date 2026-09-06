# Past Editions Block — TO FILL

This is the reusable social-proof block referenced across the campaign. It is currently **empty**, and **M8 (T-3) must not ship until it's filled** — that email is *entirely* social proof.

## Where it's used

| Email | Usage |
|---|---|
| **M1** (T-18) | Compact footer version — 3 lines |
| **M6** (T-5) | Compact footer version |
| **M8** (T-3) | **Expanded — the entire email is this block** |
| **X4** (T+7) | Compact footer version, now including Edition VII |
| Footer (all) | Optional one-liner: "Horizon has run {{PAST_EDITION_COUNT}} editions since {{SERIES_START}}." |

---

## Fill this in

### Per-edition rows

| # | Field | Value |
|---|---|---|
| **VI** | `{{VI_TITLE}}` | |
| | `{{VI_DATE}}` | |
| | `{{VI_SUMMARY_ONE_LINE}}` | *max 15 words* |
| | `{{VI_KEYNOTE}}` | |
| | `{{VI_ATTENDEES}}` | |
| | `{{VI_RECORDING_URL}}` | |
| **V** | `{{V_TITLE}}` | |
| | `{{V_DATE}}` | |
| | `{{V_SUMMARY_ONE_LINE}}` | |
| | `{{V_KEYNOTE}}` | |
| | `{{V_ATTENDEES}}` | |
| | `{{V_RECORDING_URL}}` | |
| **IV** | `{{IV_TITLE}}` | |
| | `{{IV_DATE}}` | |
| | `{{IV_SUMMARY_ONE_LINE}}` | |
| | `{{IV_KEYNOTE}}` | |
| | `{{IV_ATTENDEES}}` | |
| **III** | `{{III_TITLE}}` | |
| | `{{III_SUMMARY_ONE_LINE}}` | |
| **II** | `{{II_TITLE}}` | |
| | `{{II_SUMMARY_ONE_LINE}}` | |
| **I** | `{{I_TITLE}}` | |
| | `{{I_SUMMARY_ONE_LINE}}` | |

### Aggregate numbers

| Tag | Value |
|---|---|
| `{{PAST_EDITION_COUNT}}` | 6 |
| `{{SERIES_START}}` | |
| `{{TOTAL_PAST_ATTENDEES}}` | |
| `{{PAST_FACULTY_COUNT}}` | |
| `{{PAST_INSTITUTION_COUNT}}` | |
| `{{COUNTRY_COUNT}}` | |

### Testimonials — get at least two

| Tag | Value |
|---|---|
| `{{TESTIMONIAL_1_QUOTE}}` | |
| `{{TESTIMONIAL_1_NAME}}` | |
| `{{TESTIMONIAL_1_AFFILIATION}}` | |
| `{{TESTIMONIAL_2_QUOTE}}` | |
| `{{TESTIMONIAL_2_NAME}}` | |
| `{{TESTIMONIAL_2_AFFILIATION}}` | |

---

## Rendered templates

### Compact version — `{{PAST_EDITIONS_BLOCK}}`
*(M1, M6, X4 footers)*

```
────────────────────────────────
HORIZON SO FAR
{{PAST_EDITION_COUNT}} editions · {{TOTAL_PAST_ATTENDEES}} clinicians ·
faculty from {{PAST_INSTITUTION_COUNT}} institutions across {{COUNTRY_COUNT}} countries

Most recently:
  Edition VI — {{VI_TITLE}}
  Edition V  — {{V_TITLE}}
  Edition IV — {{IV_TITLE}}

              [  Watch past editions →  ]
────────────────────────────────
```

### Expanded version — `{{PAST_EDITIONS_BLOCK_EXPANDED}}`
*(M8, T-3)*

```
────────────────────────────────
SIX EDITIONS OF HORIZON

Edition VI · {{VI_DATE}}
{{VI_TITLE}}
Keynote: {{VI_KEYNOTE}} · {{VI_ATTENDEES}} attendees
{{VI_SUMMARY_ONE_LINE}}
[ Watch → ]

Edition V · {{V_DATE}}
{{V_TITLE}}
Keynote: {{V_KEYNOTE}} · {{V_ATTENDEES}} attendees
{{V_SUMMARY_ONE_LINE}}
[ Watch → ]

Edition IV · {{IV_DATE}}
{{IV_TITLE}}
Keynote: {{IV_KEYNOTE}} · {{IV_ATTENDEES}} attendees
{{IV_SUMMARY_ONE_LINE}}
[ Watch → ]

Edition III — {{III_TITLE}}
Edition II  — {{II_TITLE}}
Edition I   — {{I_TITLE}}

  "{{TESTIMONIAL_1_QUOTE}}"
  — {{TESTIMONIAL_1_NAME}}, {{TESTIMONIAL_1_AFFILIATION}}

  "{{TESTIMONIAL_2_QUOTE}}"
  — {{TESTIMONIAL_2_NAME}}, {{TESTIMONIAL_2_AFFILIATION}}
────────────────────────────────
```

---

## Notes when filling this in

1. **Summaries should name an outcome, not a topic.** "Explored immunotherapy" is filler. "Where six oncologists disagreed on adjuvant duration" makes someone click.
2. **Attendee numbers only if they're strong.** If Edition III drew 40 people, omit the per-edition number and lead with the aggregate.
3. **Recording links matter more than the summaries.** A working link to a past edition is the single best proof this forum delivers.
4. **Testimonials need a name and an institution** or they read as invented. An unattributed quote is worse than no quote.
5. If any past edition is a topic the recipient's speciality maps to, **reorder the block per segment** — surgical oncologists should see the surgical edition first.
