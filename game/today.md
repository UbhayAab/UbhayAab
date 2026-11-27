## The Draft

<a name="the-draft"></a>

A real next-token distribution from `llama3.1:8b`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

> Rate limiting protects the server more than it protects the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>client</code></summary>

**Correct.** The model's top token, at **38.9%** of the visible mass, carrying 1.36 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `client` | 38.9% | 1.36 bits |
| 2 | `user` | 29.3% | 1.77 bits |
| 3 | `the` | 23.9% | 2.06 bits |
| 4 | `users` | 4.4% | 4.52 bits |
| 5 | `end` | 3.5% | 4.83 bits |

</details>

<details><summary><code>user</code></summary>

**No.** `user` is rank 2 at 29.3%. The model wanted `client` at 38.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `client` | 38.9% | 1.36 bits |
| 2 | `user` | 29.3% | 1.77 bits |
| 3 | `the` | 23.9% | 2.06 bits |
| 4 | `users` | 4.4% | 4.52 bits |
| 5 | `end` | 3.5% | 4.83 bits |

</details>

<details><summary><code>end</code></summary>

**No.** `end` is rank 5 at 3.5%. The model wanted `client` at 38.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `client` | 38.9% | 1.36 bits |
| 2 | `user` | 29.3% | 1.77 bits |
| 3 | `the` | 23.9% | 2.06 bits |
| 4 | `users` | 4.4% | 4.52 bits |
| 5 | `end` | 3.5% | 4.83 bits |

</details>

<details><summary><code>users</code></summary>

**No.** `users` is rank 4 at 4.4%. The model wanted `client` at 38.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `client` | 38.9% | 1.36 bits |
| 2 | `user` | 29.3% | 1.77 bits |
| 3 | `the` | 23.9% | 2.06 bits |
| 4 | `users` | 4.4% | 4.52 bits |
| 5 | `end` | 3.5% | 4.83 bits |

</details>

<details><summary><code>the</code></summary>

**No.** `the` is rank 3 at 23.9%. The model wanted `client` at 38.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `client` | 38.9% | 1.36 bits |
| 2 | `user` | 29.3% | 1.77 bits |
| 3 | `the` | 23.9% | 2.06 bits |
| 4 | `users` | 4.4% | 4.52 bits |
| 5 | `end` | 3.5% | 4.83 bits |

</details>

Today's puzzle carries **1.91 bits** of entropy out of a possible
2.32, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All 30 puzzles](./play/draft.md)** if one is not enough.
