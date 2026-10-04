## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> The hardest bug I ever found turned out to be a **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>typ</code></summary>

**No.** `typ` is rank 5 at 11.8%. The model wanted `single` at 31.6%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `single` | 31.6% | 1.66 bits |
| 2 | `simple` | 22.8% | 2.13 bits |
| 3 | `mis` | 20.2% | 2.31 bits |
| 4 | `small` | 13.6% | 2.88 bits |
| 5 | `typ` | 11.8% | 3.09 bits |

</details>

<details><summary><code>simple</code></summary>

**No.** `simple` is rank 2 at 22.8%. The model wanted `single` at 31.6%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `single` | 31.6% | 1.66 bits |
| 2 | `simple` | 22.8% | 2.13 bits |
| 3 | `mis` | 20.2% | 2.31 bits |
| 4 | `small` | 13.6% | 2.88 bits |
| 5 | `typ` | 11.8% | 3.09 bits |

</details>

<details><summary><code>mis</code></summary>

**No.** `mis` is rank 3 at 20.2%. The model wanted `single` at 31.6%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `single` | 31.6% | 1.66 bits |
| 2 | `simple` | 22.8% | 2.13 bits |
| 3 | `mis` | 20.2% | 2.31 bits |
| 4 | `small` | 13.6% | 2.88 bits |
| 5 | `typ` | 11.8% | 3.09 bits |

</details>

<details><summary><code>single</code></summary>

**Correct.** The model's top token, at **31.6%** of the visible mass, carrying 1.66 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `single` | 31.6% | 1.66 bits |
| 2 | `simple` | 22.8% | 2.13 bits |
| 3 | `mis` | 20.2% | 2.31 bits |
| 4 | `small` | 13.6% | 2.88 bits |
| 5 | `typ` | 11.8% | 3.09 bits |

</details>

<details><summary><code>small</code></summary>

**No.** `small` is rank 4 at 13.6%. The model wanted `single` at 31.6%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `single` | 31.6% | 1.66 bits |
| 2 | `simple` | 22.8% | 2.13 bits |
| 3 | `mis` | 20.2% | 2.31 bits |
| 4 | `small` | 13.6% | 2.88 bits |
| 5 | `typ` | 11.8% | 3.09 bits |

</details>

Today's puzzle carries **2.23 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
