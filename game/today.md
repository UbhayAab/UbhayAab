## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> The difference between a fork and a thread is **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>that</code></summary>

**Correct.** The model's top token, at **28.7%** of the visible mass, carrying 1.80 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `that` | 28.7% | 1.80 bits |
| 2 | `a` | 25.0% | 2.00 bits |
| 3 | `often` | 18.8% | 2.41 bits |
| 4 | `...` | 16.2% | 2.62 bits |
| 5 | `in` | 11.3% | 3.14 bits |

</details>

<details><summary><code>in</code></summary>

**No.** `in` is rank 5 at 11.3%. The model wanted `that` at 28.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `that` | 28.7% | 1.80 bits |
| 2 | `a` | 25.0% | 2.00 bits |
| 3 | `often` | 18.8% | 2.41 bits |
| 4 | `...` | 16.2% | 2.62 bits |
| 5 | `in` | 11.3% | 3.14 bits |

</details>

<details><summary><code>often</code></summary>

**No.** `often` is rank 3 at 18.8%. The model wanted `that` at 28.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `that` | 28.7% | 1.80 bits |
| 2 | `a` | 25.0% | 2.00 bits |
| 3 | `often` | 18.8% | 2.41 bits |
| 4 | `...` | 16.2% | 2.62 bits |
| 5 | `in` | 11.3% | 3.14 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 4 at 16.2%. The model wanted `that` at 28.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `that` | 28.7% | 1.80 bits |
| 2 | `a` | 25.0% | 2.00 bits |
| 3 | `often` | 18.8% | 2.41 bits |
| 4 | `...` | 16.2% | 2.62 bits |
| 5 | `in` | 11.3% | 3.14 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 2 at 25.0%. The model wanted `that` at 28.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `that` | 28.7% | 1.80 bits |
| 2 | `a` | 25.0% | 2.00 bits |
| 3 | `often` | 18.8% | 2.41 bits |
| 4 | `...` | 16.2% | 2.62 bits |
| 5 | `in` | 11.3% | 3.14 bits |

</details>

Today's puzzle carries **2.25 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
