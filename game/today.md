## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> A tokenizer splits text into pieces that are usually smaller than **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>the</code></summary>

**No.** `the` is rank 4 at 5.6%. The model wanted `words` at 55.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `words` | 55.7% | 0.84 bits |
| 2 | `a` | 27.8% | 1.85 bits |
| 3 | `sent` | 7.2% | 3.79 bits |
| 4 | `the` | 5.6% | 4.15 bits |
| 5 | `individual` | 3.6% | 4.80 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 2 at 27.8%. The model wanted `words` at 55.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `words` | 55.7% | 0.84 bits |
| 2 | `a` | 27.8% | 1.85 bits |
| 3 | `sent` | 7.2% | 3.79 bits |
| 4 | `the` | 5.6% | 4.15 bits |
| 5 | `individual` | 3.6% | 4.80 bits |

</details>

<details><summary><code>individual</code></summary>

**No.** `individual` is rank 5 at 3.6%. The model wanted `words` at 55.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `words` | 55.7% | 0.84 bits |
| 2 | `a` | 27.8% | 1.85 bits |
| 3 | `sent` | 7.2% | 3.79 bits |
| 4 | `the` | 5.6% | 4.15 bits |
| 5 | `individual` | 3.6% | 4.80 bits |

</details>

<details><summary><code>words</code></summary>

**Correct.** The model's top token, at **55.7%** of the visible mass, carrying 0.84 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `words` | 55.7% | 0.84 bits |
| 2 | `a` | 27.8% | 1.85 bits |
| 3 | `sent` | 7.2% | 3.79 bits |
| 4 | `the` | 5.6% | 4.15 bits |
| 5 | `individual` | 3.6% | 4.80 bits |

</details>

<details><summary><code>sent</code></summary>

**No.** `sent` is rank 3 at 7.2%. The model wanted `words` at 55.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `words` | 55.7% | 0.84 bits |
| 2 | `a` | 27.8% | 1.85 bits |
| 3 | `sent` | 7.2% | 3.79 bits |
| 4 | `the` | 5.6% | 4.15 bits |
| 5 | `individual` | 3.6% | 4.80 bits |

</details>

Today's puzzle carries **1.66 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
