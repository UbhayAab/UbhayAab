## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> The correct number of retries for a network call is **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>...</code></summary>

**No.** `...` is rank 3 at 25.0%. The model wanted `typically` at 31.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `typically` | 31.3% | 1.68 bits |
| 2 | `a` | 25.2% | 1.99 bits |
| 3 | `...` | 25.0% | 2.00 bits |
| 4 | `usually` | 11.7% | 3.09 bits |
| 5 | `three` | 6.8% | 3.88 bits |

</details>

<details><summary><code>usually</code></summary>

**No.** `usually` is rank 4 at 11.7%. The model wanted `typically` at 31.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `typically` | 31.3% | 1.68 bits |
| 2 | `a` | 25.2% | 1.99 bits |
| 3 | `...` | 25.0% | 2.00 bits |
| 4 | `usually` | 11.7% | 3.09 bits |
| 5 | `three` | 6.8% | 3.88 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 2 at 25.2%. The model wanted `typically` at 31.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `typically` | 31.3% | 1.68 bits |
| 2 | `a` | 25.2% | 1.99 bits |
| 3 | `...` | 25.0% | 2.00 bits |
| 4 | `usually` | 11.7% | 3.09 bits |
| 5 | `three` | 6.8% | 3.88 bits |

</details>

<details><summary><code>three</code></summary>

**No.** `three` is rank 5 at 6.8%. The model wanted `typically` at 31.3%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `typically` | 31.3% | 1.68 bits |
| 2 | `a` | 25.2% | 1.99 bits |
| 3 | `...` | 25.0% | 2.00 bits |
| 4 | `usually` | 11.7% | 3.09 bits |
| 5 | `three` | 6.8% | 3.88 bits |

</details>

<details><summary><code>typically</code></summary>

**Correct.** The model's top token, at **31.3%** of the visible mass, carrying 1.68 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `typically` | 31.3% | 1.68 bits |
| 2 | `a` | 25.2% | 1.99 bits |
| 3 | `...` | 25.0% | 2.00 bits |
| 4 | `usually` | 11.7% | 3.09 bits |
| 5 | `three` | 6.8% | 3.88 bits |

</details>

Today's puzzle carries **2.15 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
