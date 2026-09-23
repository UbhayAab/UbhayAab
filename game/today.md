## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Attention is quadratic in the length of the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>document</code></summary>

**No.** `document` is rank 3 at 17.6%. The model wanted `text` at 43.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `text` | 43.4% | 1.21 bits |
| 2 | `input` | 25.7% | 1.96 bits |
| 3 | `document` | 17.6% | 2.51 bits |
| 4 | `message` | 7.9% | 3.67 bits |
| 5 | `signal` | 5.5% | 4.18 bits |

</details>

<details><summary><code>message</code></summary>

**No.** `message` is rank 4 at 7.9%. The model wanted `text` at 43.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `text` | 43.4% | 1.21 bits |
| 2 | `input` | 25.7% | 1.96 bits |
| 3 | `document` | 17.6% | 2.51 bits |
| 4 | `message` | 7.9% | 3.67 bits |
| 5 | `signal` | 5.5% | 4.18 bits |

</details>

<details><summary><code>input</code></summary>

**No.** `input` is rank 2 at 25.7%. The model wanted `text` at 43.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `text` | 43.4% | 1.21 bits |
| 2 | `input` | 25.7% | 1.96 bits |
| 3 | `document` | 17.6% | 2.51 bits |
| 4 | `message` | 7.9% | 3.67 bits |
| 5 | `signal` | 5.5% | 4.18 bits |

</details>

<details><summary><code>text</code></summary>

**Correct.** The model's top token, at **43.4%** of the visible mass, carrying 1.21 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `text` | 43.4% | 1.21 bits |
| 2 | `input` | 25.7% | 1.96 bits |
| 3 | `document` | 17.6% | 2.51 bits |
| 4 | `message` | 7.9% | 3.67 bits |
| 5 | `signal` | 5.5% | 4.18 bits |

</details>

<details><summary><code>signal</code></summary>

**No.** `signal` is rank 5 at 5.5%. The model wanted `text` at 43.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `text` | 43.4% | 1.21 bits |
| 2 | `input` | 25.7% | 1.96 bits |
| 3 | `document` | 17.6% | 2.51 bits |
| 4 | `message` | 7.9% | 3.67 bits |
| 5 | `signal` | 5.5% | 4.18 bits |

</details>

Today's puzzle carries **1.99 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
