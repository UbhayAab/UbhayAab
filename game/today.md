## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> The point of a type system is to make certain states **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>of</code></summary>

**No.** `of` is rank 3 at 14.7%. The model wanted `im` at 51.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `im` | 51.2% | 0.97 bits |
| 2 | `un` | 22.9% | 2.13 bits |
| 3 | `of` | 14.7% | 2.77 bits |
| 4 | `...` | 6.0% | 4.06 bits |
| 5 | `in` | 5.3% | 4.25 bits |

</details>

<details><summary><code>im</code></summary>

**Correct.** The model's top token, at **51.2%** of the visible mass, carrying 0.97 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `im` | 51.2% | 0.97 bits |
| 2 | `un` | 22.9% | 2.13 bits |
| 3 | `of` | 14.7% | 2.77 bits |
| 4 | `...` | 6.0% | 4.06 bits |
| 5 | `in` | 5.3% | 4.25 bits |

</details>

<details><summary><code>un</code></summary>

**No.** `un` is rank 2 at 22.9%. The model wanted `im` at 51.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `im` | 51.2% | 0.97 bits |
| 2 | `un` | 22.9% | 2.13 bits |
| 3 | `of` | 14.7% | 2.77 bits |
| 4 | `...` | 6.0% | 4.06 bits |
| 5 | `in` | 5.3% | 4.25 bits |

</details>

<details><summary><code>in</code></summary>

**No.** `in` is rank 5 at 5.3%. The model wanted `im` at 51.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `im` | 51.2% | 0.97 bits |
| 2 | `un` | 22.9% | 2.13 bits |
| 3 | `of` | 14.7% | 2.77 bits |
| 4 | `...` | 6.0% | 4.06 bits |
| 5 | `in` | 5.3% | 4.25 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 4 at 6.0%. The model wanted `im` at 51.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `im` | 51.2% | 0.97 bits |
| 2 | `un` | 22.9% | 2.13 bits |
| 3 | `of` | 14.7% | 2.77 bits |
| 4 | `...` | 6.0% | 4.06 bits |
| 5 | `in` | 5.3% | 4.25 bits |

</details>

Today's puzzle carries **1.85 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
