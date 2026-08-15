## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Amazon advertising campaigns waste most of their budget on **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>ads</code></summary>

**No.** `ads` is rank 5 at 15.2%. The model wanted `low` at 29.1%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `low` | 29.1% | 1.78 bits |
| 2 | `click` | 20.7% | 2.27 bits |
| 3 | `display` | 18.3% | 2.45 bits |
| 4 | `un` | 16.6% | 2.59 bits |
| 5 | `ads` | 15.2% | 2.71 bits |

</details>

<details><summary><code>display</code></summary>

**No.** `display` is rank 3 at 18.3%. The model wanted `low` at 29.1%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `low` | 29.1% | 1.78 bits |
| 2 | `click` | 20.7% | 2.27 bits |
| 3 | `display` | 18.3% | 2.45 bits |
| 4 | `un` | 16.6% | 2.59 bits |
| 5 | `ads` | 15.2% | 2.71 bits |

</details>

<details><summary><code>un</code></summary>

**No.** `un` is rank 4 at 16.6%. The model wanted `low` at 29.1%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `low` | 29.1% | 1.78 bits |
| 2 | `click` | 20.7% | 2.27 bits |
| 3 | `display` | 18.3% | 2.45 bits |
| 4 | `un` | 16.6% | 2.59 bits |
| 5 | `ads` | 15.2% | 2.71 bits |

</details>

<details><summary><code>low</code></summary>

**Correct.** The model's top token, at **29.1%** of the visible mass, carrying 1.78 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `low` | 29.1% | 1.78 bits |
| 2 | `click` | 20.7% | 2.27 bits |
| 3 | `display` | 18.3% | 2.45 bits |
| 4 | `un` | 16.6% | 2.59 bits |
| 5 | `ads` | 15.2% | 2.71 bits |

</details>

<details><summary><code>click</code></summary>

**No.** `click` is rank 2 at 20.7%. The model wanted `low` at 29.1%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `low` | 29.1% | 1.78 bits |
| 2 | `click` | 20.7% | 2.27 bits |
| 3 | `display` | 18.3% | 2.45 bits |
| 4 | `un` | 16.6% | 2.59 bits |
| 5 | `ads` | 15.2% | 2.71 bits |

</details>

Today's puzzle carries **2.28 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
