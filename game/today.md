## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> The hardest part of porting a model to llama.cpp is the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>fact</code></summary>

**Correct.** The model's top token, at **25.4%** of the visible mass, carrying 1.98 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `fact` | 25.4% | 1.98 bits |
| 2 | `lack` | 24.7% | 2.02 bits |
| 3 | `...` | 19.4% | 2.37 bits |
| 4 | `getting` | 17.2% | 2.54 bits |
| 5 | `translation` | 13.2% | 2.92 bits |

</details>

<details><summary><code>getting</code></summary>

**No.** `getting` is rank 4 at 17.2%. The model wanted `fact` at 25.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `fact` | 25.4% | 1.98 bits |
| 2 | `lack` | 24.7% | 2.02 bits |
| 3 | `...` | 19.4% | 2.37 bits |
| 4 | `getting` | 17.2% | 2.54 bits |
| 5 | `translation` | 13.2% | 2.92 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 3 at 19.4%. The model wanted `fact` at 25.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `fact` | 25.4% | 1.98 bits |
| 2 | `lack` | 24.7% | 2.02 bits |
| 3 | `...` | 19.4% | 2.37 bits |
| 4 | `getting` | 17.2% | 2.54 bits |
| 5 | `translation` | 13.2% | 2.92 bits |

</details>

<details><summary><code>translation</code></summary>

**No.** `translation` is rank 5 at 13.2%. The model wanted `fact` at 25.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `fact` | 25.4% | 1.98 bits |
| 2 | `lack` | 24.7% | 2.02 bits |
| 3 | `...` | 19.4% | 2.37 bits |
| 4 | `getting` | 17.2% | 2.54 bits |
| 5 | `translation` | 13.2% | 2.92 bits |

</details>

<details><summary><code>lack</code></summary>

**No.** `lack` is rank 2 at 24.7%. The model wanted `fact` at 25.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `fact` | 25.4% | 1.98 bits |
| 2 | `lack` | 24.7% | 2.02 bits |
| 3 | `...` | 19.4% | 2.37 bits |
| 4 | `getting` | 17.2% | 2.54 bits |
| 5 | `translation` | 13.2% | 2.92 bits |

</details>

Today's puzzle carries **2.28 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
