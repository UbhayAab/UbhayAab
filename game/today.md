## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> The reason floating point addition is not associative is **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>...</code></summary>

**No.** `...` is rank 5 at 1.5%. The model wanted `because` at 71.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 71.7% | 0.48 bits |
| 2 | `due` | 20.1% | 2.32 bits |
| 3 | `that` | 5.1% | 4.29 bits |
| 4 | `a` | 1.6% | 5.96 bits |
| 5 | `...` | 1.5% | 6.06 bits |

</details>

<details><summary><code>because</code></summary>

**Correct.** The model's top token, at **71.7%** of the visible mass, carrying 0.48 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 71.7% | 0.48 bits |
| 2 | `due` | 20.1% | 2.32 bits |
| 3 | `that` | 5.1% | 4.29 bits |
| 4 | `a` | 1.6% | 5.96 bits |
| 5 | `...` | 1.5% | 6.06 bits |

</details>

<details><summary><code>due</code></summary>

**No.** `due` is rank 2 at 20.1%. The model wanted `because` at 71.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 71.7% | 0.48 bits |
| 2 | `due` | 20.1% | 2.32 bits |
| 3 | `that` | 5.1% | 4.29 bits |
| 4 | `a` | 1.6% | 5.96 bits |
| 5 | `...` | 1.5% | 6.06 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 4 at 1.6%. The model wanted `because` at 71.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 71.7% | 0.48 bits |
| 2 | `due` | 20.1% | 2.32 bits |
| 3 | `that` | 5.1% | 4.29 bits |
| 4 | `a` | 1.6% | 5.96 bits |
| 5 | `...` | 1.5% | 6.06 bits |

</details>

<details><summary><code>that</code></summary>

**No.** `that` is rank 3 at 5.1%. The model wanted `because` at 71.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 71.7% | 0.48 bits |
| 2 | `due` | 20.1% | 2.32 bits |
| 3 | `that` | 5.1% | 4.29 bits |
| 4 | `a` | 1.6% | 5.96 bits |
| 5 | `...` | 1.5% | 6.06 bits |

</details>

Today's puzzle carries **1.22 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
