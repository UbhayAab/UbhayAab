## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Per-layer embeddings let a model store capacity without **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>in</code></summary>

**No.** `in` is rank 5 at 2.9%. The model wanted `incre` at 78.0%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `incre` | 78.0% | 0.36 bits |
| 2 | `ne` | 7.2% | 3.79 bits |
| 3 | `having` | 6.7% | 3.90 bits |
| 4 | `requ` | 5.2% | 4.27 bits |
| 5 | `in` | 2.9% | 5.11 bits |

</details>

<details><summary><code>ne</code></summary>

**No.** `ne` is rank 2 at 7.2%. The model wanted `incre` at 78.0%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `incre` | 78.0% | 0.36 bits |
| 2 | `ne` | 7.2% | 3.79 bits |
| 3 | `having` | 6.7% | 3.90 bits |
| 4 | `requ` | 5.2% | 4.27 bits |
| 5 | `in` | 2.9% | 5.11 bits |

</details>

<details><summary><code>requ</code></summary>

**No.** `requ` is rank 4 at 5.2%. The model wanted `incre` at 78.0%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `incre` | 78.0% | 0.36 bits |
| 2 | `ne` | 7.2% | 3.79 bits |
| 3 | `having` | 6.7% | 3.90 bits |
| 4 | `requ` | 5.2% | 4.27 bits |
| 5 | `in` | 2.9% | 5.11 bits |

</details>

<details><summary><code>incre</code></summary>

**Correct.** The model's top token, at **78.0%** of the visible mass, carrying 0.36 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `incre` | 78.0% | 0.36 bits |
| 2 | `ne` | 7.2% | 3.79 bits |
| 3 | `having` | 6.7% | 3.90 bits |
| 4 | `requ` | 5.2% | 4.27 bits |
| 5 | `in` | 2.9% | 5.11 bits |

</details>

<details><summary><code>having</code></summary>

**No.** `having` is rank 3 at 6.7%. The model wanted `incre` at 78.0%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `incre` | 78.0% | 0.36 bits |
| 2 | `ne` | 7.2% | 3.79 bits |
| 3 | `having` | 6.7% | 3.90 bits |
| 4 | `requ` | 5.2% | 4.27 bits |
| 5 | `in` | 2.9% | 5.11 bits |

</details>

Today's puzzle carries **1.19 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
