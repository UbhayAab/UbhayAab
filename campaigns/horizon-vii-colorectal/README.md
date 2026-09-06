# Horizon VII — Email Campaign Journey

Campaign assets for **Horizon Edition VII · "Colorectal Cancer: From Evidence to the Real World"**
A Global Collaborative Forum on Cancer Care · Jarurat Care Foundation
**Saturday 26 September · 7:00–9:00 PM IST · Online via Zoom · Free**

| File | What's in it |
|---|---|
| [`01-campaign-plan.md`](01-campaign-plan.md) | Event snapshot, positioning, segments, the 30-send schedule, branch logic + flowchart, send-time rules, metrics targets, guardrails, build checklist |
| [`02-email-copy.md`](02-email-copy.md) | Production-ready copy for all 30 emails — subject line variants, preheaders, full bodies, across every behavioural track |
| [`03-automation-rules.md`](03-automation-rules.md) | ESP-agnostic build spec: contact properties, trigger rules, UTM scheme, deliverability pre-flight, kill switches |
| [`04-past-editions-placeholder.md`](04-past-editions-placeholder.md) | The social-proof block for Editions I–VI — **to be filled** |

## The shape of it

One announcement, then five behavioural branches:

- **M** — main broadcast, T-18 → T-0 (12 sends) plus 2 post-event follow-ups
- **R** — registered: exits promo instantly, gets 9 attendance-driving sends
- **C** — clicked but didn't register: friction problem, 2 sends
- **O** — opened but never clicked: persuasion problem, 2 plain-text sends from a person
- **N** — never opened: subject-line problem, 3 attempts then sunset
- **P** — replied: automation pauses, a human answers in 4 hours, 6 intent playbooks

Then 4 post-event sends split by attended / no-showed / never registered.

## Published page

The same journey as a browsable page: <https://claude.ai/code/artifact/17cb7ea1-1b8d-48aa-b283-0554459b24de>
Source: [`journey.html`](journey.html) — filter by track, click any send to jump to its copy.
