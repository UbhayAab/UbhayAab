## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> A benchmark that cannot be reproduced is just **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>an</code></summary>

**No.** `an` is rank 4 at 5.4%. The model wanted `a` at 51.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `a` | 51.5% | 0.96 bits |
| 2 | `...` | 20.2% | 2.30 bits |
| 3 | `not` | 18.2% | 2.45 bits |
| 4 | `an` | 5.4% | 4.21 bits |
| 5 | `use` | 4.7% | 4.42 bits |

</details>

<details><summary><code>use</code></summary>

**No.** `use` is rank 5 at 4.7%. The model wanted `a` at 51.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `a` | 51.5% | 0.96 bits |
| 2 | `...` | 20.2% | 2.30 bits |
| 3 | `not` | 18.2% | 2.45 bits |
| 4 | `an` | 5.4% | 4.21 bits |
| 5 | `use` | 4.7% | 4.42 bits |

</details>

<details><summary><code>a</code></summary>

**Correct.** The model's top token, at **51.5%** of the visible mass, carrying 0.96 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `a` | 51.5% | 0.96 bits |
| 2 | `...` | 20.2% | 2.30 bits |
| 3 | `not` | 18.2% | 2.45 bits |
| 4 | `an` | 5.4% | 4.21 bits |
| 5 | `use` | 4.7% | 4.42 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 2 at 20.2%. The model wanted `a` at 51.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `a` | 51.5% | 0.96 bits |
| 2 | `...` | 20.2% | 2.30 bits |
| 3 | `not` | 18.2% | 2.45 bits |
| 4 | `an` | 5.4% | 4.21 bits |
| 5 | `use` | 4.7% | 4.42 bits |

</details>

<details><summary><code>not</code></summary>

**No.** `not` is rank 3 at 18.2%. The model wanted `a` at 51.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `a` | 51.5% | 0.96 bits |
| 2 | `...` | 20.2% | 2.30 bits |
| 3 | `not` | 18.2% | 2.45 bits |
| 4 | `an` | 5.4% | 4.21 bits |
| 5 | `use` | 4.7% | 4.42 bits |

</details>

Today's puzzle carries **1.84 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
