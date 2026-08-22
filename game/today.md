## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Most scrapers fail in production because of **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>ins</code></summary>

**No.** `ins` is rank 2 at 20.2%. The model wanted `their` at 29.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `their` | 29.9% | 1.74 bits |
| 2 | `ins` | 20.2% | 2.31 bits |
| 3 | `the` | 17.8% | 2.49 bits |
| 4 | `in` | 16.2% | 2.63 bits |
| 5 | `a` | 15.9% | 2.66 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 5 at 15.9%. The model wanted `their` at 29.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `their` | 29.9% | 1.74 bits |
| 2 | `ins` | 20.2% | 2.31 bits |
| 3 | `the` | 17.8% | 2.49 bits |
| 4 | `in` | 16.2% | 2.63 bits |
| 5 | `a` | 15.9% | 2.66 bits |

</details>

<details><summary><code>in</code></summary>

**No.** `in` is rank 4 at 16.2%. The model wanted `their` at 29.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `their` | 29.9% | 1.74 bits |
| 2 | `ins` | 20.2% | 2.31 bits |
| 3 | `the` | 17.8% | 2.49 bits |
| 4 | `in` | 16.2% | 2.63 bits |
| 5 | `a` | 15.9% | 2.66 bits |

</details>

<details><summary><code>the</code></summary>

**No.** `the` is rank 3 at 17.8%. The model wanted `their` at 29.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `their` | 29.9% | 1.74 bits |
| 2 | `ins` | 20.2% | 2.31 bits |
| 3 | `the` | 17.8% | 2.49 bits |
| 4 | `in` | 16.2% | 2.63 bits |
| 5 | `a` | 15.9% | 2.66 bits |

</details>

<details><summary><code>their</code></summary>

**Correct.** The model's top token, at **29.9%** of the visible mass, carrying 1.74 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `their` | 29.9% | 1.74 bits |
| 2 | `ins` | 20.2% | 2.31 bits |
| 3 | `the` | 17.8% | 2.49 bits |
| 4 | `in` | 16.2% | 2.63 bits |
| 5 | `a` | 15.9% | 2.66 bits |

</details>

Today's puzzle carries **2.28 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
