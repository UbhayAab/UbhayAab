## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> When a model does not fit in VRAM, the runtime will **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>display</code></summary>

**Correct.** The model's top token, at **28.9%** of the visible mass, carrying 1.79 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `display` | 28.9% | 1.79 bits |
| 2 | `attempt` | 25.2% | 1.99 bits |
| 3 | `throw` | 17.6% | 2.50 bits |
| 4 | `autom` | 15.4% | 2.70 bits |
| 5 | `switch` | 13.0% | 2.95 bits |

</details>

<details><summary><code>attempt</code></summary>

**No.** `attempt` is rank 2 at 25.2%. The model wanted `display` at 28.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `display` | 28.9% | 1.79 bits |
| 2 | `attempt` | 25.2% | 1.99 bits |
| 3 | `throw` | 17.6% | 2.50 bits |
| 4 | `autom` | 15.4% | 2.70 bits |
| 5 | `switch` | 13.0% | 2.95 bits |

</details>

<details><summary><code>throw</code></summary>

**No.** `throw` is rank 3 at 17.6%. The model wanted `display` at 28.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `display` | 28.9% | 1.79 bits |
| 2 | `attempt` | 25.2% | 1.99 bits |
| 3 | `throw` | 17.6% | 2.50 bits |
| 4 | `autom` | 15.4% | 2.70 bits |
| 5 | `switch` | 13.0% | 2.95 bits |

</details>

<details><summary><code>switch</code></summary>

**No.** `switch` is rank 5 at 13.0%. The model wanted `display` at 28.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `display` | 28.9% | 1.79 bits |
| 2 | `attempt` | 25.2% | 1.99 bits |
| 3 | `throw` | 17.6% | 2.50 bits |
| 4 | `autom` | 15.4% | 2.70 bits |
| 5 | `switch` | 13.0% | 2.95 bits |

</details>

<details><summary><code>autom</code></summary>

**No.** `autom` is rank 4 at 15.4%. The model wanted `display` at 28.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `display` | 28.9% | 1.79 bits |
| 2 | `attempt` | 25.2% | 1.99 bits |
| 3 | `throw` | 17.6% | 2.50 bits |
| 4 | `autom` | 15.4% | 2.70 bits |
| 5 | `switch` | 13.0% | 2.95 bits |

</details>

Today's puzzle carries **2.26 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
