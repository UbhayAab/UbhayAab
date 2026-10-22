## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Writing a compiler is easier than writing a **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>interpreter</code></summary>

**Correct.** The model's top token, at **36.9%** of the visible mass, carrying 1.44 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `interpreter` | 36.9% | 1.44 bits |
| 2 | `parser` | 22.8% | 2.13 bits |
| 3 | `program` | 16.5% | 2.60 bits |
| 4 | `runtime` | 16.1% | 2.64 bits |
| 5 | `debug` | 7.7% | 3.70 bits |

</details>

<details><summary><code>parser</code></summary>

**No.** `parser` is rank 2 at 22.8%. The model wanted `interpreter` at 36.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `interpreter` | 36.9% | 1.44 bits |
| 2 | `parser` | 22.8% | 2.13 bits |
| 3 | `program` | 16.5% | 2.60 bits |
| 4 | `runtime` | 16.1% | 2.64 bits |
| 5 | `debug` | 7.7% | 3.70 bits |

</details>

<details><summary><code>runtime</code></summary>

**No.** `runtime` is rank 4 at 16.1%. The model wanted `interpreter` at 36.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `interpreter` | 36.9% | 1.44 bits |
| 2 | `parser` | 22.8% | 2.13 bits |
| 3 | `program` | 16.5% | 2.60 bits |
| 4 | `runtime` | 16.1% | 2.64 bits |
| 5 | `debug` | 7.7% | 3.70 bits |

</details>

<details><summary><code>program</code></summary>

**No.** `program` is rank 3 at 16.5%. The model wanted `interpreter` at 36.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `interpreter` | 36.9% | 1.44 bits |
| 2 | `parser` | 22.8% | 2.13 bits |
| 3 | `program` | 16.5% | 2.60 bits |
| 4 | `runtime` | 16.1% | 2.64 bits |
| 5 | `debug` | 7.7% | 3.70 bits |

</details>

<details><summary><code>debug</code></summary>

**No.** `debug` is rank 5 at 7.7%. The model wanted `interpreter` at 36.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `interpreter` | 36.9% | 1.44 bits |
| 2 | `parser` | 22.8% | 2.13 bits |
| 3 | `program` | 16.5% | 2.60 bits |
| 4 | `runtime` | 16.1% | 2.64 bits |
| 5 | `debug` | 7.7% | 3.70 bits |

</details>

Today's puzzle carries **2.15 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
