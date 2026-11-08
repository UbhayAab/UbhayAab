## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Quantising a model to 4 bits mostly costs you **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>precision</code></summary>

**No.** `precision` is rank 3 at 14.6%. The model wanted `nothing` at 33.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `nothing` | 33.8% | 1.57 bits |
| 2 | `the` | 26.7% | 1.91 bits |
| 3 | `precision` | 14.6% | 2.78 bits |
| 4 | `a` | 12.5% | 3.00 bits |
| 5 | `memory` | 12.5% | 3.00 bits |

</details>

<details><summary><code>nothing</code></summary>

**Correct.** The model's top token, at **33.8%** of the visible mass, carrying 1.57 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `nothing` | 33.8% | 1.57 bits |
| 2 | `the` | 26.7% | 1.91 bits |
| 3 | `precision` | 14.6% | 2.78 bits |
| 4 | `a` | 12.5% | 3.00 bits |
| 5 | `memory` | 12.5% | 3.00 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 4 at 12.5%. The model wanted `nothing` at 33.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `nothing` | 33.8% | 1.57 bits |
| 2 | `the` | 26.7% | 1.91 bits |
| 3 | `precision` | 14.6% | 2.78 bits |
| 4 | `a` | 12.5% | 3.00 bits |
| 5 | `memory` | 12.5% | 3.00 bits |

</details>

<details><summary><code>the</code></summary>

**No.** `the` is rank 2 at 26.7%. The model wanted `nothing` at 33.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `nothing` | 33.8% | 1.57 bits |
| 2 | `the` | 26.7% | 1.91 bits |
| 3 | `precision` | 14.6% | 2.78 bits |
| 4 | `a` | 12.5% | 3.00 bits |
| 5 | `memory` | 12.5% | 3.00 bits |

</details>

<details><summary><code>memory</code></summary>

**No.** `memory` is rank 5 at 12.5%. The model wanted `nothing` at 33.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `nothing` | 33.8% | 1.57 bits |
| 2 | `the` | 26.7% | 1.91 bits |
| 3 | `precision` | 14.6% | 2.78 bits |
| 4 | `a` | 12.5% | 3.00 bits |
| 5 | `memory` | 12.5% | 3.00 bits |

</details>

Today's puzzle carries **2.19 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
