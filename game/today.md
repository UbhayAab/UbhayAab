## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> A cache is only useful when the access pattern is **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>sequential</code></summary>

**No.** `sequential` is rank 4 at 6.9%. The model wanted `predict` at 42.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `predict` | 42.5% | 1.23 bits |
| 2 | `known` | 27.0% | 1.89 bits |
| 3 | `uniform` | 17.0% | 2.56 bits |
| 4 | `sequential` | 6.9% | 3.85 bits |
| 5 | `well` | 6.5% | 3.95 bits |

</details>

<details><summary><code>known</code></summary>

**No.** `known` is rank 2 at 27.0%. The model wanted `predict` at 42.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `predict` | 42.5% | 1.23 bits |
| 2 | `known` | 27.0% | 1.89 bits |
| 3 | `uniform` | 17.0% | 2.56 bits |
| 4 | `sequential` | 6.9% | 3.85 bits |
| 5 | `well` | 6.5% | 3.95 bits |

</details>

<details><summary><code>uniform</code></summary>

**No.** `uniform` is rank 3 at 17.0%. The model wanted `predict` at 42.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `predict` | 42.5% | 1.23 bits |
| 2 | `known` | 27.0% | 1.89 bits |
| 3 | `uniform` | 17.0% | 2.56 bits |
| 4 | `sequential` | 6.9% | 3.85 bits |
| 5 | `well` | 6.5% | 3.95 bits |

</details>

<details><summary><code>well</code></summary>

**No.** `well` is rank 5 at 6.5%. The model wanted `predict` at 42.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `predict` | 42.5% | 1.23 bits |
| 2 | `known` | 27.0% | 1.89 bits |
| 3 | `uniform` | 17.0% | 2.56 bits |
| 4 | `sequential` | 6.9% | 3.85 bits |
| 5 | `well` | 6.5% | 3.95 bits |

</details>

<details><summary><code>predict</code></summary>

**Correct.** The model's top token, at **42.5%** of the visible mass, carrying 1.23 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `predict` | 42.5% | 1.23 bits |
| 2 | `known` | 27.0% | 1.89 bits |
| 3 | `uniform` | 17.0% | 2.56 bits |
| 4 | `sequential` | 6.9% | 3.85 bits |
| 5 | `well` | 6.5% | 3.95 bits |

</details>

Today's puzzle carries **1.99 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
