## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Every distributed system eventually reinvents **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>a</code></summary>

**No.** `a` is rank 4 at 1.0%. The model wanted `the` at 80.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `the` | 80.4% | 0.31 bits |
| 2 | `...` | 15.6% | 2.68 bits |
| 3 | `its` | 2.4% | 5.37 bits |
| 4 | `a` | 1.0% | 6.72 bits |
| 5 | `it` | 0.6% | 7.27 bits |

</details>

<details><summary><code>its</code></summary>

**No.** `its` is rank 3 at 2.4%. The model wanted `the` at 80.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `the` | 80.4% | 0.31 bits |
| 2 | `...` | 15.6% | 2.68 bits |
| 3 | `its` | 2.4% | 5.37 bits |
| 4 | `a` | 1.0% | 6.72 bits |
| 5 | `it` | 0.6% | 7.27 bits |

</details>

<details><summary><code>it</code></summary>

**No.** `it` is rank 5 at 0.6%. The model wanted `the` at 80.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `the` | 80.4% | 0.31 bits |
| 2 | `...` | 15.6% | 2.68 bits |
| 3 | `its` | 2.4% | 5.37 bits |
| 4 | `a` | 1.0% | 6.72 bits |
| 5 | `it` | 0.6% | 7.27 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 2 at 15.6%. The model wanted `the` at 80.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `the` | 80.4% | 0.31 bits |
| 2 | `...` | 15.6% | 2.68 bits |
| 3 | `its` | 2.4% | 5.37 bits |
| 4 | `a` | 1.0% | 6.72 bits |
| 5 | `it` | 0.6% | 7.27 bits |

</details>

<details><summary><code>the</code></summary>

**Correct.** The model's top token, at **80.4%** of the visible mass, carrying 0.31 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `the` | 80.4% | 0.31 bits |
| 2 | `...` | 15.6% | 2.68 bits |
| 3 | `its` | 2.4% | 5.37 bits |
| 4 | `a` | 1.0% | 6.72 bits |
| 5 | `it` | 0.6% | 7.27 bits |

</details>

Today's puzzle carries **0.91 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
