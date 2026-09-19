## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> The best way to debug a slow query is to read the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>explain</code></summary>

**No.** `explain` is rank 4 at 5.8%. The model wanted `execution` at 70.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `execution` | 70.3% | 0.51 bits |
| 2 | `EX` | 12.3% | 3.03 bits |
| 3 | `query` | 6.2% | 4.01 bits |
| 4 | `explain` | 5.8% | 4.10 bits |
| 5 | `ex` | 5.5% | 4.20 bits |

</details>

<details><summary><code>execution</code></summary>

**Correct.** The model's top token, at **70.3%** of the visible mass, carrying 0.51 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `execution` | 70.3% | 0.51 bits |
| 2 | `EX` | 12.3% | 3.03 bits |
| 3 | `query` | 6.2% | 4.01 bits |
| 4 | `explain` | 5.8% | 4.10 bits |
| 5 | `ex` | 5.5% | 4.20 bits |

</details>

<details><summary><code>EX</code></summary>

**No.** `EX` is rank 2 at 12.3%. The model wanted `execution` at 70.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `execution` | 70.3% | 0.51 bits |
| 2 | `EX` | 12.3% | 3.03 bits |
| 3 | `query` | 6.2% | 4.01 bits |
| 4 | `explain` | 5.8% | 4.10 bits |
| 5 | `ex` | 5.5% | 4.20 bits |

</details>

<details><summary><code>ex</code></summary>

**No.** `ex` is rank 5 at 5.5%. The model wanted `execution` at 70.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `execution` | 70.3% | 0.51 bits |
| 2 | `EX` | 12.3% | 3.03 bits |
| 3 | `query` | 6.2% | 4.01 bits |
| 4 | `explain` | 5.8% | 4.10 bits |
| 5 | `ex` | 5.5% | 4.20 bits |

</details>

<details><summary><code>query</code></summary>

**No.** `query` is rank 3 at 6.2%. The model wanted `execution` at 70.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `execution` | 70.3% | 0.51 bits |
| 2 | `EX` | 12.3% | 3.03 bits |
| 3 | `query` | 6.2% | 4.01 bits |
| 4 | `explain` | 5.8% | 4.10 bits |
| 5 | `ex` | 5.5% | 4.20 bits |

</details>

Today's puzzle carries **1.45 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
