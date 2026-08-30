## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> A good commit message explains the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>problem</code></summary>

**No.** `problem` is rank 4 at 11.1%. The model wanted `reason` at 36.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `reason` | 36.3% | 1.46 bits |
| 2 | `purpose` | 30.8% | 1.70 bits |
| 3 | `changes` | 13.5% | 2.89 bits |
| 4 | `problem` | 11.1% | 3.17 bits |
| 5 | `change` | 8.4% | 3.58 bits |

</details>

<details><summary><code>change</code></summary>

**No.** `change` is rank 5 at 8.4%. The model wanted `reason` at 36.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `reason` | 36.3% | 1.46 bits |
| 2 | `purpose` | 30.8% | 1.70 bits |
| 3 | `changes` | 13.5% | 2.89 bits |
| 4 | `problem` | 11.1% | 3.17 bits |
| 5 | `change` | 8.4% | 3.58 bits |

</details>

<details><summary><code>reason</code></summary>

**Correct.** The model's top token, at **36.3%** of the visible mass, carrying 1.46 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `reason` | 36.3% | 1.46 bits |
| 2 | `purpose` | 30.8% | 1.70 bits |
| 3 | `changes` | 13.5% | 2.89 bits |
| 4 | `problem` | 11.1% | 3.17 bits |
| 5 | `change` | 8.4% | 3.58 bits |

</details>

<details><summary><code>changes</code></summary>

**No.** `changes` is rank 3 at 13.5%. The model wanted `reason` at 36.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `reason` | 36.3% | 1.46 bits |
| 2 | `purpose` | 30.8% | 1.70 bits |
| 3 | `changes` | 13.5% | 2.89 bits |
| 4 | `problem` | 11.1% | 3.17 bits |
| 5 | `change` | 8.4% | 3.58 bits |

</details>

<details><summary><code>purpose</code></summary>

**No.** `purpose` is rank 2 at 30.8%. The model wanted `reason` at 36.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `reason` | 36.3% | 1.46 bits |
| 2 | `purpose` | 30.8% | 1.70 bits |
| 3 | `changes` | 13.5% | 2.89 bits |
| 4 | `problem` | 11.1% | 3.17 bits |
| 5 | `change` | 8.4% | 3.58 bits |

</details>

Today's puzzle carries **2.09 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
