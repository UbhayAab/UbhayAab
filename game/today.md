## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> The reason JavaScript has two equality operators is **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>to</code></summary>

**No.** `to` is rank 5 at 6.7%. The model wanted `because` at 61.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 61.9% | 0.69 bits |
| 2 | `due` | 13.2% | 2.92 bits |
| 3 | `a` | 10.6% | 3.24 bits |
| 4 | `...` | 7.6% | 3.72 bits |
| 5 | `to` | 6.7% | 3.91 bits |

</details>

<details><summary><code>due</code></summary>

**No.** `due` is rank 2 at 13.2%. The model wanted `because` at 61.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 61.9% | 0.69 bits |
| 2 | `due` | 13.2% | 2.92 bits |
| 3 | `a` | 10.6% | 3.24 bits |
| 4 | `...` | 7.6% | 3.72 bits |
| 5 | `to` | 6.7% | 3.91 bits |

</details>

<details><summary><code>because</code></summary>

**Correct.** The model's top token, at **61.9%** of the visible mass, carrying 0.69 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 61.9% | 0.69 bits |
| 2 | `due` | 13.2% | 2.92 bits |
| 3 | `a` | 10.6% | 3.24 bits |
| 4 | `...` | 7.6% | 3.72 bits |
| 5 | `to` | 6.7% | 3.91 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 3 at 10.6%. The model wanted `because` at 61.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 61.9% | 0.69 bits |
| 2 | `due` | 13.2% | 2.92 bits |
| 3 | `a` | 10.6% | 3.24 bits |
| 4 | `...` | 7.6% | 3.72 bits |
| 5 | `to` | 6.7% | 3.91 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 4 at 7.6%. The model wanted `because` at 61.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 61.9% | 0.69 bits |
| 2 | `due` | 13.2% | 2.92 bits |
| 3 | `a` | 10.6% | 3.24 bits |
| 4 | `...` | 7.6% | 3.72 bits |
| 5 | `to` | 6.7% | 3.91 bits |

</details>

Today's puzzle carries **1.70 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
