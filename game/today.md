## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> An 8 GB graphics card can comfortably run a model with about **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>1</code></summary>

**No.** `1` is rank 5 at 14.3%. The model wanted `100` at 34.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `100` | 34.4% | 1.54 bits |
| 2 | `10` | 19.0% | 2.39 bits |
| 3 | `20` | 17.3% | 2.53 bits |
| 4 | `200` | 15.0% | 2.73 bits |
| 5 | `1` | 14.3% | 2.81 bits |

</details>

<details><summary><code>20</code></summary>

**No.** `20` is rank 3 at 17.3%. The model wanted `100` at 34.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `100` | 34.4% | 1.54 bits |
| 2 | `10` | 19.0% | 2.39 bits |
| 3 | `20` | 17.3% | 2.53 bits |
| 4 | `200` | 15.0% | 2.73 bits |
| 5 | `1` | 14.3% | 2.81 bits |

</details>

<details><summary><code>200</code></summary>

**No.** `200` is rank 4 at 15.0%. The model wanted `100` at 34.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `100` | 34.4% | 1.54 bits |
| 2 | `10` | 19.0% | 2.39 bits |
| 3 | `20` | 17.3% | 2.53 bits |
| 4 | `200` | 15.0% | 2.73 bits |
| 5 | `1` | 14.3% | 2.81 bits |

</details>

<details><summary><code>10</code></summary>

**No.** `10` is rank 2 at 19.0%. The model wanted `100` at 34.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `100` | 34.4% | 1.54 bits |
| 2 | `10` | 19.0% | 2.39 bits |
| 3 | `20` | 17.3% | 2.53 bits |
| 4 | `200` | 15.0% | 2.73 bits |
| 5 | `1` | 14.3% | 2.81 bits |

</details>

<details><summary><code>100</code></summary>

**Correct.** The model's top token, at **34.4%** of the visible mass, carrying 1.54 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `100` | 34.4% | 1.54 bits |
| 2 | `10` | 19.0% | 2.39 bits |
| 3 | `20` | 17.3% | 2.53 bits |
| 4 | `200` | 15.0% | 2.73 bits |
| 5 | `1` | 14.3% | 2.81 bits |

</details>

Today's puzzle carries **2.23 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
