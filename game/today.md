## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Row level security in Postgres is enforced by the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>setting</code></summary>

**No.** `setting` is rank 5 at 5.5%. The model wanted `security` at 66.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `security` | 66.5% | 0.59 bits |
| 2 | `row` | 14.6% | 2.78 bits |
| 3 | `'` | 7.1% | 3.82 bits |
| 4 | `policy` | 6.4% | 3.97 bits |
| 5 | `setting` | 5.5% | 4.19 bits |

</details>

<details><summary><code>row</code></summary>

**No.** `row` is rank 2 at 14.6%. The model wanted `security` at 66.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `security` | 66.5% | 0.59 bits |
| 2 | `row` | 14.6% | 2.78 bits |
| 3 | `'` | 7.1% | 3.82 bits |
| 4 | `policy` | 6.4% | 3.97 bits |
| 5 | `setting` | 5.5% | 4.19 bits |

</details>

<details><summary><code>security</code></summary>

**Correct.** The model's top token, at **66.5%** of the visible mass, carrying 0.59 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `security` | 66.5% | 0.59 bits |
| 2 | `row` | 14.6% | 2.78 bits |
| 3 | `'` | 7.1% | 3.82 bits |
| 4 | `policy` | 6.4% | 3.97 bits |
| 5 | `setting` | 5.5% | 4.19 bits |

</details>

<details><summary><code>'</code></summary>

**No.** `'` is rank 3 at 7.1%. The model wanted `security` at 66.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `security` | 66.5% | 0.59 bits |
| 2 | `row` | 14.6% | 2.78 bits |
| 3 | `'` | 7.1% | 3.82 bits |
| 4 | `policy` | 6.4% | 3.97 bits |
| 5 | `setting` | 5.5% | 4.19 bits |

</details>

<details><summary><code>policy</code></summary>

**No.** `policy` is rank 4 at 6.4%. The model wanted `security` at 66.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `security` | 66.5% | 0.59 bits |
| 2 | `row` | 14.6% | 2.78 bits |
| 3 | `'` | 7.1% | 3.82 bits |
| 4 | `policy` | 6.4% | 3.97 bits |
| 5 | `setting` | 5.5% | 4.19 bits |

</details>

Today's puzzle carries **1.55 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
