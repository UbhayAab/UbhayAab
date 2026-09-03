## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Static site generators became popular because they **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>off</code></summary>

**No.** `off` is rank 2 at 20.7%. The model wanted `allowed` at 55.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `allowed` | 55.5% | 0.85 bits |
| 2 | `off` | 20.7% | 2.27 bits |
| 3 | `allow` | 10.7% | 3.22 bits |
| 4 | `...` | 6.5% | 3.93 bits |
| 5 | `they` | 6.5% | 3.93 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 4 at 6.5%. The model wanted `allowed` at 55.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `allowed` | 55.5% | 0.85 bits |
| 2 | `off` | 20.7% | 2.27 bits |
| 3 | `allow` | 10.7% | 3.22 bits |
| 4 | `...` | 6.5% | 3.93 bits |
| 5 | `they` | 6.5% | 3.93 bits |

</details>

<details><summary><code>they</code></summary>

**No.** `they` is rank 5 at 6.5%. The model wanted `allowed` at 55.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `allowed` | 55.5% | 0.85 bits |
| 2 | `off` | 20.7% | 2.27 bits |
| 3 | `allow` | 10.7% | 3.22 bits |
| 4 | `...` | 6.5% | 3.93 bits |
| 5 | `they` | 6.5% | 3.93 bits |

</details>

<details><summary><code>allow</code></summary>

**No.** `allow` is rank 3 at 10.7%. The model wanted `allowed` at 55.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `allowed` | 55.5% | 0.85 bits |
| 2 | `off` | 20.7% | 2.27 bits |
| 3 | `allow` | 10.7% | 3.22 bits |
| 4 | `...` | 6.5% | 3.93 bits |
| 5 | `they` | 6.5% | 3.93 bits |

</details>

<details><summary><code>allowed</code></summary>

**Correct.** The model's top token, at **55.5%** of the visible mass, carrying 0.85 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `allowed` | 55.5% | 0.85 bits |
| 2 | `off` | 20.7% | 2.27 bits |
| 3 | `allow` | 10.7% | 3.22 bits |
| 4 | `...` | 6.5% | 3.93 bits |
| 5 | `they` | 6.5% | 3.93 bits |

</details>

Today's puzzle carries **1.80 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
