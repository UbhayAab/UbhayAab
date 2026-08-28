## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Most performance problems turn out to be **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>design</code></summary>

**No.** `design` is rank 5 at 3.5%. The model wanted `ca` at 42.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `ca` | 42.4% | 1.24 bits |
| 2 | `related` | 29.3% | 1.77 bits |
| 3 | `due` | 21.0% | 2.25 bits |
| 4 | `simple` | 3.8% | 4.70 bits |
| 5 | `design` | 3.5% | 4.83 bits |

</details>

<details><summary><code>ca</code></summary>

**Correct.** The model's top token, at **42.4%** of the visible mass, carrying 1.24 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `ca` | 42.4% | 1.24 bits |
| 2 | `related` | 29.3% | 1.77 bits |
| 3 | `due` | 21.0% | 2.25 bits |
| 4 | `simple` | 3.8% | 4.70 bits |
| 5 | `design` | 3.5% | 4.83 bits |

</details>

<details><summary><code>simple</code></summary>

**No.** `simple` is rank 4 at 3.8%. The model wanted `ca` at 42.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `ca` | 42.4% | 1.24 bits |
| 2 | `related` | 29.3% | 1.77 bits |
| 3 | `due` | 21.0% | 2.25 bits |
| 4 | `simple` | 3.8% | 4.70 bits |
| 5 | `design` | 3.5% | 4.83 bits |

</details>

<details><summary><code>due</code></summary>

**No.** `due` is rank 3 at 21.0%. The model wanted `ca` at 42.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `ca` | 42.4% | 1.24 bits |
| 2 | `related` | 29.3% | 1.77 bits |
| 3 | `due` | 21.0% | 2.25 bits |
| 4 | `simple` | 3.8% | 4.70 bits |
| 5 | `design` | 3.5% | 4.83 bits |

</details>

<details><summary><code>related</code></summary>

**No.** `related` is rank 2 at 29.3%. The model wanted `ca` at 42.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `ca` | 42.4% | 1.24 bits |
| 2 | `related` | 29.3% | 1.77 bits |
| 3 | `due` | 21.0% | 2.25 bits |
| 4 | `simple` | 3.8% | 4.70 bits |
| 5 | `design` | 3.5% | 4.83 bits |

</details>

Today's puzzle carries **1.87 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
