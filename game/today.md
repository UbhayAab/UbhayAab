## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> The KV cache grows linearly with the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>incre</code></summary>

**No.** `incre` is rank 4 at 0.8%. The model wanted `number` at 89.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `number` | 89.2% | 0.16 bits |
| 2 | `size` | 7.2% | 3.79 bits |
| 3 | `amount` | 1.9% | 5.72 bits |
| 4 | `incre` | 0.8% | 6.90 bits |
| 5 | `increase` | 0.8% | 6.95 bits |

</details>

<details><summary><code>size</code></summary>

**No.** `size` is rank 2 at 7.2%. The model wanted `number` at 89.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `number` | 89.2% | 0.16 bits |
| 2 | `size` | 7.2% | 3.79 bits |
| 3 | `amount` | 1.9% | 5.72 bits |
| 4 | `incre` | 0.8% | 6.90 bits |
| 5 | `increase` | 0.8% | 6.95 bits |

</details>

<details><summary><code>number</code></summary>

**Correct.** The model's top token, at **89.2%** of the visible mass, carrying 0.16 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `number` | 89.2% | 0.16 bits |
| 2 | `size` | 7.2% | 3.79 bits |
| 3 | `amount` | 1.9% | 5.72 bits |
| 4 | `incre` | 0.8% | 6.90 bits |
| 5 | `increase` | 0.8% | 6.95 bits |

</details>

<details><summary><code>increase</code></summary>

**No.** `increase` is rank 5 at 0.8%. The model wanted `number` at 89.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `number` | 89.2% | 0.16 bits |
| 2 | `size` | 7.2% | 3.79 bits |
| 3 | `amount` | 1.9% | 5.72 bits |
| 4 | `incre` | 0.8% | 6.90 bits |
| 5 | `increase` | 0.8% | 6.95 bits |

</details>

<details><summary><code>amount</code></summary>

**No.** `amount` is rank 3 at 1.9%. The model wanted `number` at 89.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `number` | 89.2% | 0.16 bits |
| 2 | `size` | 7.2% | 3.79 bits |
| 3 | `amount` | 1.9% | 5.72 bits |
| 4 | `incre` | 0.8% | 6.90 bits |
| 5 | `increase` | 0.8% | 6.95 bits |

</details>

Today's puzzle carries **0.64 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
