## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Documentation rots faster than code because **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>people</code></summary>

**No.** `people` is rank 4 at 4.3%. The model wanted `it` at 78.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `it` | 78.8% | 0.34 bits |
| 2 | `...` | 7.2% | 3.80 bits |
| 3 | `code` | 6.0% | 4.06 bits |
| 4 | `people` | 4.3% | 4.54 bits |
| 5 | `the` | 3.7% | 4.74 bits |

</details>

<details><summary><code>it</code></summary>

**Correct.** The model's top token, at **78.8%** of the visible mass, carrying 0.34 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `it` | 78.8% | 0.34 bits |
| 2 | `...` | 7.2% | 3.80 bits |
| 3 | `code` | 6.0% | 4.06 bits |
| 4 | `people` | 4.3% | 4.54 bits |
| 5 | `the` | 3.7% | 4.74 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 2 at 7.2%. The model wanted `it` at 78.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `it` | 78.8% | 0.34 bits |
| 2 | `...` | 7.2% | 3.80 bits |
| 3 | `code` | 6.0% | 4.06 bits |
| 4 | `people` | 4.3% | 4.54 bits |
| 5 | `the` | 3.7% | 4.74 bits |

</details>

<details><summary><code>the</code></summary>

**No.** `the` is rank 5 at 3.7%. The model wanted `it` at 78.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `it` | 78.8% | 0.34 bits |
| 2 | `...` | 7.2% | 3.80 bits |
| 3 | `code` | 6.0% | 4.06 bits |
| 4 | `people` | 4.3% | 4.54 bits |
| 5 | `the` | 3.7% | 4.74 bits |

</details>

<details><summary><code>code</code></summary>

**No.** `code` is rank 3 at 6.0%. The model wanted `it` at 78.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `it` | 78.8% | 0.34 bits |
| 2 | `...` | 7.2% | 3.80 bits |
| 3 | `code` | 6.0% | 4.06 bits |
| 4 | `people` | 4.3% | 4.54 bits |
| 5 | `the` | 3.7% | 4.74 bits |

</details>

Today's puzzle carries **1.16 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
