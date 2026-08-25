## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> The biggest risk in a database migration is **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>...</code></summary>

**No.** `...` is rank 4 at 8.7%. The model wanted `data` at 62.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `data` | 62.9% | 0.67 bits |
| 2 | `losing` | 11.0% | 3.19 bits |
| 3 | `the` | 9.3% | 3.43 bits |
| 4 | `...` | 8.7% | 3.52 bits |
| 5 | `that` | 8.1% | 3.62 bits |

</details>

<details><summary><code>the</code></summary>

**No.** `the` is rank 3 at 9.3%. The model wanted `data` at 62.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `data` | 62.9% | 0.67 bits |
| 2 | `losing` | 11.0% | 3.19 bits |
| 3 | `the` | 9.3% | 3.43 bits |
| 4 | `...` | 8.7% | 3.52 bits |
| 5 | `that` | 8.1% | 3.62 bits |

</details>

<details><summary><code>that</code></summary>

**No.** `that` is rank 5 at 8.1%. The model wanted `data` at 62.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `data` | 62.9% | 0.67 bits |
| 2 | `losing` | 11.0% | 3.19 bits |
| 3 | `the` | 9.3% | 3.43 bits |
| 4 | `...` | 8.7% | 3.52 bits |
| 5 | `that` | 8.1% | 3.62 bits |

</details>

<details><summary><code>losing</code></summary>

**No.** `losing` is rank 2 at 11.0%. The model wanted `data` at 62.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `data` | 62.9% | 0.67 bits |
| 2 | `losing` | 11.0% | 3.19 bits |
| 3 | `the` | 9.3% | 3.43 bits |
| 4 | `...` | 8.7% | 3.52 bits |
| 5 | `that` | 8.1% | 3.62 bits |

</details>

<details><summary><code>data</code></summary>

**Correct.** The model's top token, at **62.9%** of the visible mass, carrying 0.67 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `data` | 62.9% | 0.67 bits |
| 2 | `losing` | 11.0% | 3.19 bits |
| 3 | `the` | 9.3% | 3.43 bits |
| 4 | `...` | 8.7% | 3.52 bits |
| 5 | `that` | 8.1% | 3.62 bits |

</details>

Today's puzzle carries **1.69 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
