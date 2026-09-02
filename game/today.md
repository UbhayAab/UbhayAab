## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> The first thing to check when a GPU is idle is the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>Power</code></summary>

**No.** `Power` is rank 2 at 8.4%. The model wanted `power` at 77.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `power` | 77.9% | 0.36 bits |
| 2 | `Power` | 8.4% | 3.58 bits |
| 3 | `GPU` | 5.4% | 4.20 bits |
| 4 | `driver` | 4.5% | 4.48 bits |
| 5 | `system` | 3.8% | 4.71 bits |

</details>

<details><summary><code>driver</code></summary>

**No.** `driver` is rank 4 at 4.5%. The model wanted `power` at 77.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `power` | 77.9% | 0.36 bits |
| 2 | `Power` | 8.4% | 3.58 bits |
| 3 | `GPU` | 5.4% | 4.20 bits |
| 4 | `driver` | 4.5% | 4.48 bits |
| 5 | `system` | 3.8% | 4.71 bits |

</details>

<details><summary><code>power</code></summary>

**Correct.** The model's top token, at **77.9%** of the visible mass, carrying 0.36 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `power` | 77.9% | 0.36 bits |
| 2 | `Power` | 8.4% | 3.58 bits |
| 3 | `GPU` | 5.4% | 4.20 bits |
| 4 | `driver` | 4.5% | 4.48 bits |
| 5 | `system` | 3.8% | 4.71 bits |

</details>

<details><summary><code>system</code></summary>

**No.** `system` is rank 5 at 3.8%. The model wanted `power` at 77.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `power` | 77.9% | 0.36 bits |
| 2 | `Power` | 8.4% | 3.58 bits |
| 3 | `GPU` | 5.4% | 4.20 bits |
| 4 | `driver` | 4.5% | 4.48 bits |
| 5 | `system` | 3.8% | 4.71 bits |

</details>

<details><summary><code>GPU</code></summary>

**No.** `GPU` is rank 3 at 5.4%. The model wanted `power` at 77.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `power` | 77.9% | 0.36 bits |
| 2 | `Power` | 8.4% | 3.58 bits |
| 3 | `GPU` | 5.4% | 4.20 bits |
| 4 | `driver` | 4.5% | 4.48 bits |
| 5 | `system` | 3.8% | 4.71 bits |

</details>

Today's puzzle carries **1.19 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
