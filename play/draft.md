# The Draft

30 real next-token distributions from `llama3.1:8b`, running locally on
RTX 5060 Laptop, 8 GB VRAM. Guess which token the model ranks first, then open it.

**Method.** Ollama /v1/chat/completions, temperature 0, max_tokens 1, top_logprobs 5. Probabilities are renormalised over the visible top five. The distribution is conditioned on the chat template, so it is the model's first reply token rather than a raw prose continuation.

Nothing here runs at read time. The distributions were computed once by
[`scripts/gen-draft.mjs`](../scripts/gen-draft.mjs) and committed, which is why this works
with no server, no GitHub Action and no JavaScript. Median entropy across the set is
**1.91 bits** of a possible 2.32, so a coin flip does
better here than intuition usually does.

Generated 2026-08-09 09:49 UTC.

---

### 1. hard &nbsp;<sub>2.23 bits of entropy</sub>

> The hardest bug I ever found turned out to be a **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>typ</code></summary>

**No.** `typ` is rank 5 at 11.8%. The model wanted `single` at 31.6%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `single` | 31.6% | 1.66 bits |
| 2 | `simple` | 22.8% | 2.13 bits |
| 3 | `mis` | 20.2% | 2.31 bits |
| 4 | `small` | 13.6% | 2.88 bits |
| 5 | `typ` | 11.8% | 3.09 bits |

</details>

<details><summary><code>simple</code></summary>

**No.** `simple` is rank 2 at 22.8%. The model wanted `single` at 31.6%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `single` | 31.6% | 1.66 bits |
| 2 | `simple` | 22.8% | 2.13 bits |
| 3 | `mis` | 20.2% | 2.31 bits |
| 4 | `small` | 13.6% | 2.88 bits |
| 5 | `typ` | 11.8% | 3.09 bits |

</details>

<details><summary><code>mis</code></summary>

**No.** `mis` is rank 3 at 20.2%. The model wanted `single` at 31.6%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `single` | 31.6% | 1.66 bits |
| 2 | `simple` | 22.8% | 2.13 bits |
| 3 | `mis` | 20.2% | 2.31 bits |
| 4 | `small` | 13.6% | 2.88 bits |
| 5 | `typ` | 11.8% | 3.09 bits |

</details>

<details><summary><code>single</code></summary>

**Correct.** The model's top token, at **31.6%** of the visible mass, carrying 1.66 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `single` | 31.6% | 1.66 bits |
| 2 | `simple` | 22.8% | 2.13 bits |
| 3 | `mis` | 20.2% | 2.31 bits |
| 4 | `small` | 13.6% | 2.88 bits |
| 5 | `typ` | 11.8% | 3.09 bits |

</details>

<details><summary><code>small</code></summary>

**No.** `small` is rank 4 at 13.6%. The model wanted `single` at 31.6%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `single` | 31.6% | 1.66 bits |
| 2 | `simple` | 22.8% | 2.13 bits |
| 3 | `mis` | 20.2% | 2.31 bits |
| 4 | `small` | 13.6% | 2.88 bits |
| 5 | `typ` | 11.8% | 3.09 bits |

</details>

---

### 2. hard &nbsp;<sub>2.23 bits of entropy</sub>

> An 8 GB graphics card can comfortably run a model with about **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>1</code></summary>

**No.** `1` is rank 5 at 14.3%. The model wanted `100` at 34.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `100` | 34.4% | 1.54 bits |
| 2 | `10` | 19.0% | 2.39 bits |
| 3 | `20` | 17.3% | 2.53 bits |
| 4 | `200` | 15.0% | 2.73 bits |
| 5 | `1` | 14.3% | 2.81 bits |

</details>

<details><summary><code>20</code></summary>

**No.** `20` is rank 3 at 17.3%. The model wanted `100` at 34.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `100` | 34.4% | 1.54 bits |
| 2 | `10` | 19.0% | 2.39 bits |
| 3 | `20` | 17.3% | 2.53 bits |
| 4 | `200` | 15.0% | 2.73 bits |
| 5 | `1` | 14.3% | 2.81 bits |

</details>

<details><summary><code>200</code></summary>

**No.** `200` is rank 4 at 15.0%. The model wanted `100` at 34.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `100` | 34.4% | 1.54 bits |
| 2 | `10` | 19.0% | 2.39 bits |
| 3 | `20` | 17.3% | 2.53 bits |
| 4 | `200` | 15.0% | 2.73 bits |
| 5 | `1` | 14.3% | 2.81 bits |

</details>

<details><summary><code>10</code></summary>

**No.** `10` is rank 2 at 19.0%. The model wanted `100` at 34.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `100` | 34.4% | 1.54 bits |
| 2 | `10` | 19.0% | 2.39 bits |
| 3 | `20` | 17.3% | 2.53 bits |
| 4 | `200` | 15.0% | 2.73 bits |
| 5 | `1` | 14.3% | 2.81 bits |

</details>

<details><summary><code>100</code></summary>

**Correct.** The model's top token, at **34.4%** of the visible mass, carrying 1.54 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `100` | 34.4% | 1.54 bits |
| 2 | `10` | 19.0% | 2.39 bits |
| 3 | `20` | 17.3% | 2.53 bits |
| 4 | `200` | 15.0% | 2.73 bits |
| 5 | `1` | 14.3% | 2.81 bits |

</details>

---

### 3. hard &nbsp;<sub>2.26 bits of entropy</sub>

> When a model does not fit in VRAM, the runtime will **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>display</code></summary>

**Correct.** The model's top token, at **28.9%** of the visible mass, carrying 1.79 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `display` | 28.9% | 1.79 bits |
| 2 | `attempt` | 25.2% | 1.99 bits |
| 3 | `throw` | 17.6% | 2.50 bits |
| 4 | `autom` | 15.4% | 2.70 bits |
| 5 | `switch` | 13.0% | 2.95 bits |

</details>

<details><summary><code>attempt</code></summary>

**No.** `attempt` is rank 2 at 25.2%. The model wanted `display` at 28.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `display` | 28.9% | 1.79 bits |
| 2 | `attempt` | 25.2% | 1.99 bits |
| 3 | `throw` | 17.6% | 2.50 bits |
| 4 | `autom` | 15.4% | 2.70 bits |
| 5 | `switch` | 13.0% | 2.95 bits |

</details>

<details><summary><code>throw</code></summary>

**No.** `throw` is rank 3 at 17.6%. The model wanted `display` at 28.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `display` | 28.9% | 1.79 bits |
| 2 | `attempt` | 25.2% | 1.99 bits |
| 3 | `throw` | 17.6% | 2.50 bits |
| 4 | `autom` | 15.4% | 2.70 bits |
| 5 | `switch` | 13.0% | 2.95 bits |

</details>

<details><summary><code>switch</code></summary>

**No.** `switch` is rank 5 at 13.0%. The model wanted `display` at 28.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `display` | 28.9% | 1.79 bits |
| 2 | `attempt` | 25.2% | 1.99 bits |
| 3 | `throw` | 17.6% | 2.50 bits |
| 4 | `autom` | 15.4% | 2.70 bits |
| 5 | `switch` | 13.0% | 2.95 bits |

</details>

<details><summary><code>autom</code></summary>

**No.** `autom` is rank 4 at 15.4%. The model wanted `display` at 28.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `display` | 28.9% | 1.79 bits |
| 2 | `attempt` | 25.2% | 1.99 bits |
| 3 | `throw` | 17.6% | 2.50 bits |
| 4 | `autom` | 15.4% | 2.70 bits |
| 5 | `switch` | 13.0% | 2.95 bits |

</details>

---

### 4. medium &nbsp;<sub>1.70 bits of entropy</sub>

> The reason JavaScript has two equality operators is **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>to</code></summary>

**No.** `to` is rank 5 at 6.7%. The model wanted `because` at 61.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 61.9% | 0.69 bits |
| 2 | `due` | 13.2% | 2.92 bits |
| 3 | `a` | 10.6% | 3.24 bits |
| 4 | `...` | 7.6% | 3.72 bits |
| 5 | `to` | 6.7% | 3.91 bits |

</details>

<details><summary><code>due</code></summary>

**No.** `due` is rank 2 at 13.2%. The model wanted `because` at 61.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 61.9% | 0.69 bits |
| 2 | `due` | 13.2% | 2.92 bits |
| 3 | `a` | 10.6% | 3.24 bits |
| 4 | `...` | 7.6% | 3.72 bits |
| 5 | `to` | 6.7% | 3.91 bits |

</details>

<details><summary><code>because</code></summary>

**Correct.** The model's top token, at **61.9%** of the visible mass, carrying 0.69 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 61.9% | 0.69 bits |
| 2 | `due` | 13.2% | 2.92 bits |
| 3 | `a` | 10.6% | 3.24 bits |
| 4 | `...` | 7.6% | 3.72 bits |
| 5 | `to` | 6.7% | 3.91 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 3 at 10.6%. The model wanted `because` at 61.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 61.9% | 0.69 bits |
| 2 | `due` | 13.2% | 2.92 bits |
| 3 | `a` | 10.6% | 3.24 bits |
| 4 | `...` | 7.6% | 3.72 bits |
| 5 | `to` | 6.7% | 3.91 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 4 at 7.6%. The model wanted `because` at 61.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 61.9% | 0.69 bits |
| 2 | `due` | 13.2% | 2.92 bits |
| 3 | `a` | 10.6% | 3.24 bits |
| 4 | `...` | 7.6% | 3.72 bits |
| 5 | `to` | 6.7% | 3.91 bits |

</details>

---

### 5. hard &nbsp;<sub>2.15 bits of entropy</sub>

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

---

### 6. hard &nbsp;<sub>2.19 bits of entropy</sub>

> Quantising a model to 4 bits mostly costs you **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>precision</code></summary>

**No.** `precision` is rank 3 at 14.6%. The model wanted `nothing` at 33.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `nothing` | 33.8% | 1.57 bits |
| 2 | `the` | 26.7% | 1.91 bits |
| 3 | `precision` | 14.6% | 2.78 bits |
| 4 | `a` | 12.5% | 3.00 bits |
| 5 | `memory` | 12.5% | 3.00 bits |

</details>

<details><summary><code>nothing</code></summary>

**Correct.** The model's top token, at **33.8%** of the visible mass, carrying 1.57 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `nothing` | 33.8% | 1.57 bits |
| 2 | `the` | 26.7% | 1.91 bits |
| 3 | `precision` | 14.6% | 2.78 bits |
| 4 | `a` | 12.5% | 3.00 bits |
| 5 | `memory` | 12.5% | 3.00 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 4 at 12.5%. The model wanted `nothing` at 33.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `nothing` | 33.8% | 1.57 bits |
| 2 | `the` | 26.7% | 1.91 bits |
| 3 | `precision` | 14.6% | 2.78 bits |
| 4 | `a` | 12.5% | 3.00 bits |
| 5 | `memory` | 12.5% | 3.00 bits |

</details>

<details><summary><code>the</code></summary>

**No.** `the` is rank 2 at 26.7%. The model wanted `nothing` at 33.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `nothing` | 33.8% | 1.57 bits |
| 2 | `the` | 26.7% | 1.91 bits |
| 3 | `precision` | 14.6% | 2.78 bits |
| 4 | `a` | 12.5% | 3.00 bits |
| 5 | `memory` | 12.5% | 3.00 bits |

</details>

<details><summary><code>memory</code></summary>

**No.** `memory` is rank 5 at 12.5%. The model wanted `nothing` at 33.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `nothing` | 33.8% | 1.57 bits |
| 2 | `the` | 26.7% | 1.91 bits |
| 3 | `precision` | 14.6% | 2.78 bits |
| 4 | `a` | 12.5% | 3.00 bits |
| 5 | `memory` | 12.5% | 3.00 bits |

</details>

---

### 7. hard &nbsp;<sub>2.25 bits of entropy</sub>

> The difference between a fork and a thread is **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>that</code></summary>

**Correct.** The model's top token, at **28.7%** of the visible mass, carrying 1.80 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `that` | 28.7% | 1.80 bits |
| 2 | `a` | 25.0% | 2.00 bits |
| 3 | `often` | 18.8% | 2.41 bits |
| 4 | `...` | 16.2% | 2.62 bits |
| 5 | `in` | 11.3% | 3.14 bits |

</details>

<details><summary><code>in</code></summary>

**No.** `in` is rank 5 at 11.3%. The model wanted `that` at 28.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `that` | 28.7% | 1.80 bits |
| 2 | `a` | 25.0% | 2.00 bits |
| 3 | `often` | 18.8% | 2.41 bits |
| 4 | `...` | 16.2% | 2.62 bits |
| 5 | `in` | 11.3% | 3.14 bits |

</details>

<details><summary><code>often</code></summary>

**No.** `often` is rank 3 at 18.8%. The model wanted `that` at 28.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `that` | 28.7% | 1.80 bits |
| 2 | `a` | 25.0% | 2.00 bits |
| 3 | `often` | 18.8% | 2.41 bits |
| 4 | `...` | 16.2% | 2.62 bits |
| 5 | `in` | 11.3% | 3.14 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 4 at 16.2%. The model wanted `that` at 28.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `that` | 28.7% | 1.80 bits |
| 2 | `a` | 25.0% | 2.00 bits |
| 3 | `often` | 18.8% | 2.41 bits |
| 4 | `...` | 16.2% | 2.62 bits |
| 5 | `in` | 11.3% | 3.14 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 2 at 25.0%. The model wanted `that` at 28.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `that` | 28.7% | 1.80 bits |
| 2 | `a` | 25.0% | 2.00 bits |
| 3 | `often` | 18.8% | 2.41 bits |
| 4 | `...` | 16.2% | 2.62 bits |
| 5 | `in` | 11.3% | 3.14 bits |

</details>

---

### 8. medium &nbsp;<sub>1.84 bits of entropy</sub>

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

---

### 9. easy &nbsp;<sub>0.91 bits of entropy</sub>

> Every distributed system eventually reinvents **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>a</code></summary>

**No.** `a` is rank 4 at 1.0%. The model wanted `the` at 80.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `the` | 80.4% | 0.31 bits |
| 2 | `...` | 15.6% | 2.68 bits |
| 3 | `its` | 2.4% | 5.37 bits |
| 4 | `a` | 1.0% | 6.72 bits |
| 5 | `it` | 0.6% | 7.27 bits |

</details>

<details><summary><code>its</code></summary>

**No.** `its` is rank 3 at 2.4%. The model wanted `the` at 80.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `the` | 80.4% | 0.31 bits |
| 2 | `...` | 15.6% | 2.68 bits |
| 3 | `its` | 2.4% | 5.37 bits |
| 4 | `a` | 1.0% | 6.72 bits |
| 5 | `it` | 0.6% | 7.27 bits |

</details>

<details><summary><code>it</code></summary>

**No.** `it` is rank 5 at 0.6%. The model wanted `the` at 80.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `the` | 80.4% | 0.31 bits |
| 2 | `...` | 15.6% | 2.68 bits |
| 3 | `its` | 2.4% | 5.37 bits |
| 4 | `a` | 1.0% | 6.72 bits |
| 5 | `it` | 0.6% | 7.27 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 2 at 15.6%. The model wanted `the` at 80.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `the` | 80.4% | 0.31 bits |
| 2 | `...` | 15.6% | 2.68 bits |
| 3 | `its` | 2.4% | 5.37 bits |
| 4 | `a` | 1.0% | 6.72 bits |
| 5 | `it` | 0.6% | 7.27 bits |

</details>

<details><summary><code>the</code></summary>

**Correct.** The model's top token, at **80.4%** of the visible mass, carrying 0.31 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `the` | 80.4% | 0.31 bits |
| 2 | `...` | 15.6% | 2.68 bits |
| 3 | `its` | 2.4% | 5.37 bits |
| 4 | `a` | 1.0% | 6.72 bits |
| 5 | `it` | 0.6% | 7.27 bits |

</details>

---

### 10. easy &nbsp;<sub>0.64 bits of entropy</sub>

> The KV cache grows linearly with the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>incre</code></summary>

**No.** `incre` is rank 4 at 0.8%. The model wanted `number` at 89.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `number` | 89.2% | 0.16 bits |
| 2 | `size` | 7.2% | 3.79 bits |
| 3 | `amount` | 1.9% | 5.72 bits |
| 4 | `incre` | 0.8% | 6.90 bits |
| 5 | `increase` | 0.8% | 6.95 bits |

</details>

<details><summary><code>size</code></summary>

**No.** `size` is rank 2 at 7.2%. The model wanted `number` at 89.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `number` | 89.2% | 0.16 bits |
| 2 | `size` | 7.2% | 3.79 bits |
| 3 | `amount` | 1.9% | 5.72 bits |
| 4 | `incre` | 0.8% | 6.90 bits |
| 5 | `increase` | 0.8% | 6.95 bits |

</details>

<details><summary><code>number</code></summary>

**Correct.** The model's top token, at **89.2%** of the visible mass, carrying 0.16 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `number` | 89.2% | 0.16 bits |
| 2 | `size` | 7.2% | 3.79 bits |
| 3 | `amount` | 1.9% | 5.72 bits |
| 4 | `incre` | 0.8% | 6.90 bits |
| 5 | `increase` | 0.8% | 6.95 bits |

</details>

<details><summary><code>increase</code></summary>

**No.** `increase` is rank 5 at 0.8%. The model wanted `number` at 89.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `number` | 89.2% | 0.16 bits |
| 2 | `size` | 7.2% | 3.79 bits |
| 3 | `amount` | 1.9% | 5.72 bits |
| 4 | `incre` | 0.8% | 6.90 bits |
| 5 | `increase` | 0.8% | 6.95 bits |

</details>

<details><summary><code>amount</code></summary>

**No.** `amount` is rank 3 at 1.9%. The model wanted `number` at 89.2%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `number` | 89.2% | 0.16 bits |
| 2 | `size` | 7.2% | 3.79 bits |
| 3 | `amount` | 1.9% | 5.72 bits |
| 4 | `incre` | 0.8% | 6.90 bits |
| 5 | `increase` | 0.8% | 6.95 bits |

</details>

---

### 11. hard &nbsp;<sub>2.28 bits of entropy</sub>

> Amazon advertising campaigns waste most of their budget on **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>ads</code></summary>

**No.** `ads` is rank 5 at 15.2%. The model wanted `low` at 29.1%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `low` | 29.1% | 1.78 bits |
| 2 | `click` | 20.7% | 2.27 bits |
| 3 | `display` | 18.3% | 2.45 bits |
| 4 | `un` | 16.6% | 2.59 bits |
| 5 | `ads` | 15.2% | 2.71 bits |

</details>

<details><summary><code>display</code></summary>

**No.** `display` is rank 3 at 18.3%. The model wanted `low` at 29.1%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `low` | 29.1% | 1.78 bits |
| 2 | `click` | 20.7% | 2.27 bits |
| 3 | `display` | 18.3% | 2.45 bits |
| 4 | `un` | 16.6% | 2.59 bits |
| 5 | `ads` | 15.2% | 2.71 bits |

</details>

<details><summary><code>un</code></summary>

**No.** `un` is rank 4 at 16.6%. The model wanted `low` at 29.1%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `low` | 29.1% | 1.78 bits |
| 2 | `click` | 20.7% | 2.27 bits |
| 3 | `display` | 18.3% | 2.45 bits |
| 4 | `un` | 16.6% | 2.59 bits |
| 5 | `ads` | 15.2% | 2.71 bits |

</details>

<details><summary><code>low</code></summary>

**Correct.** The model's top token, at **29.1%** of the visible mass, carrying 1.78 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `low` | 29.1% | 1.78 bits |
| 2 | `click` | 20.7% | 2.27 bits |
| 3 | `display` | 18.3% | 2.45 bits |
| 4 | `un` | 16.6% | 2.59 bits |
| 5 | `ads` | 15.2% | 2.71 bits |

</details>

<details><summary><code>click</code></summary>

**No.** `click` is rank 2 at 20.7%. The model wanted `low` at 29.1%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `low` | 29.1% | 1.78 bits |
| 2 | `click` | 20.7% | 2.27 bits |
| 3 | `display` | 18.3% | 2.45 bits |
| 4 | `un` | 16.6% | 2.59 bits |
| 5 | `ads` | 15.2% | 2.71 bits |

</details>

---

### 12. hard &nbsp;<sub>2.28 bits of entropy</sub>

> The hardest part of porting a model to llama.cpp is the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>fact</code></summary>

**Correct.** The model's top token, at **25.4%** of the visible mass, carrying 1.98 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `fact` | 25.4% | 1.98 bits |
| 2 | `lack` | 24.7% | 2.02 bits |
| 3 | `...` | 19.4% | 2.37 bits |
| 4 | `getting` | 17.2% | 2.54 bits |
| 5 | `translation` | 13.2% | 2.92 bits |

</details>

<details><summary><code>getting</code></summary>

**No.** `getting` is rank 4 at 17.2%. The model wanted `fact` at 25.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `fact` | 25.4% | 1.98 bits |
| 2 | `lack` | 24.7% | 2.02 bits |
| 3 | `...` | 19.4% | 2.37 bits |
| 4 | `getting` | 17.2% | 2.54 bits |
| 5 | `translation` | 13.2% | 2.92 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 3 at 19.4%. The model wanted `fact` at 25.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `fact` | 25.4% | 1.98 bits |
| 2 | `lack` | 24.7% | 2.02 bits |
| 3 | `...` | 19.4% | 2.37 bits |
| 4 | `getting` | 17.2% | 2.54 bits |
| 5 | `translation` | 13.2% | 2.92 bits |

</details>

<details><summary><code>translation</code></summary>

**No.** `translation` is rank 5 at 13.2%. The model wanted `fact` at 25.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `fact` | 25.4% | 1.98 bits |
| 2 | `lack` | 24.7% | 2.02 bits |
| 3 | `...` | 19.4% | 2.37 bits |
| 4 | `getting` | 17.2% | 2.54 bits |
| 5 | `translation` | 13.2% | 2.92 bits |

</details>

<details><summary><code>lack</code></summary>

**No.** `lack` is rank 2 at 24.7%. The model wanted `fact` at 25.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `fact` | 25.4% | 1.98 bits |
| 2 | `lack` | 24.7% | 2.02 bits |
| 3 | `...` | 19.4% | 2.37 bits |
| 4 | `getting` | 17.2% | 2.54 bits |
| 5 | `translation` | 13.2% | 2.92 bits |

</details>

---

### 13. easy &nbsp;<sub>1.19 bits of entropy</sub>

> Per-layer embeddings let a model store capacity without **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>in</code></summary>

**No.** `in` is rank 5 at 2.9%. The model wanted `incre` at 78.0%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `incre` | 78.0% | 0.36 bits |
| 2 | `ne` | 7.2% | 3.79 bits |
| 3 | `having` | 6.7% | 3.90 bits |
| 4 | `requ` | 5.2% | 4.27 bits |
| 5 | `in` | 2.9% | 5.11 bits |

</details>

<details><summary><code>ne</code></summary>

**No.** `ne` is rank 2 at 7.2%. The model wanted `incre` at 78.0%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `incre` | 78.0% | 0.36 bits |
| 2 | `ne` | 7.2% | 3.79 bits |
| 3 | `having` | 6.7% | 3.90 bits |
| 4 | `requ` | 5.2% | 4.27 bits |
| 5 | `in` | 2.9% | 5.11 bits |

</details>

<details><summary><code>requ</code></summary>

**No.** `requ` is rank 4 at 5.2%. The model wanted `incre` at 78.0%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `incre` | 78.0% | 0.36 bits |
| 2 | `ne` | 7.2% | 3.79 bits |
| 3 | `having` | 6.7% | 3.90 bits |
| 4 | `requ` | 5.2% | 4.27 bits |
| 5 | `in` | 2.9% | 5.11 bits |

</details>

<details><summary><code>incre</code></summary>

**Correct.** The model's top token, at **78.0%** of the visible mass, carrying 0.36 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `incre` | 78.0% | 0.36 bits |
| 2 | `ne` | 7.2% | 3.79 bits |
| 3 | `having` | 6.7% | 3.90 bits |
| 4 | `requ` | 5.2% | 4.27 bits |
| 5 | `in` | 2.9% | 5.11 bits |

</details>

<details><summary><code>having</code></summary>

**No.** `having` is rank 3 at 6.7%. The model wanted `incre` at 78.0%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `incre` | 78.0% | 0.36 bits |
| 2 | `ne` | 7.2% | 3.79 bits |
| 3 | `having` | 6.7% | 3.90 bits |
| 4 | `requ` | 5.2% | 4.27 bits |
| 5 | `in` | 2.9% | 5.11 bits |

</details>

---

### 14. medium &nbsp;<sub>1.85 bits of entropy</sub>

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

---

### 15. medium &nbsp;<sub>1.55 bits of entropy</sub>

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

---

### 16. medium &nbsp;<sub>1.45 bits of entropy</sub>

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

---

### 17. hard &nbsp;<sub>1.99 bits of entropy</sub>

> A cache is only useful when the access pattern is **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>sequential</code></summary>

**No.** `sequential` is rank 4 at 6.9%. The model wanted `predict` at 42.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `predict` | 42.5% | 1.23 bits |
| 2 | `known` | 27.0% | 1.89 bits |
| 3 | `uniform` | 17.0% | 2.56 bits |
| 4 | `sequential` | 6.9% | 3.85 bits |
| 5 | `well` | 6.5% | 3.95 bits |

</details>

<details><summary><code>known</code></summary>

**No.** `known` is rank 2 at 27.0%. The model wanted `predict` at 42.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `predict` | 42.5% | 1.23 bits |
| 2 | `known` | 27.0% | 1.89 bits |
| 3 | `uniform` | 17.0% | 2.56 bits |
| 4 | `sequential` | 6.9% | 3.85 bits |
| 5 | `well` | 6.5% | 3.95 bits |

</details>

<details><summary><code>uniform</code></summary>

**No.** `uniform` is rank 3 at 17.0%. The model wanted `predict` at 42.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `predict` | 42.5% | 1.23 bits |
| 2 | `known` | 27.0% | 1.89 bits |
| 3 | `uniform` | 17.0% | 2.56 bits |
| 4 | `sequential` | 6.9% | 3.85 bits |
| 5 | `well` | 6.5% | 3.95 bits |

</details>

<details><summary><code>well</code></summary>

**No.** `well` is rank 5 at 6.5%. The model wanted `predict` at 42.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `predict` | 42.5% | 1.23 bits |
| 2 | `known` | 27.0% | 1.89 bits |
| 3 | `uniform` | 17.0% | 2.56 bits |
| 4 | `sequential` | 6.9% | 3.85 bits |
| 5 | `well` | 6.5% | 3.95 bits |

</details>

<details><summary><code>predict</code></summary>

**Correct.** The model's top token, at **42.5%** of the visible mass, carrying 1.23 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `predict` | 42.5% | 1.23 bits |
| 2 | `known` | 27.0% | 1.89 bits |
| 3 | `uniform` | 17.0% | 2.56 bits |
| 4 | `sequential` | 6.9% | 3.85 bits |
| 5 | `well` | 6.5% | 3.95 bits |

</details>

---

### 18. hard &nbsp;<sub>2.28 bits of entropy</sub>

> Most scrapers fail in production because of **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>ins</code></summary>

**No.** `ins` is rank 2 at 20.2%. The model wanted `their` at 29.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `their` | 29.9% | 1.74 bits |
| 2 | `ins` | 20.2% | 2.31 bits |
| 3 | `the` | 17.8% | 2.49 bits |
| 4 | `in` | 16.2% | 2.63 bits |
| 5 | `a` | 15.9% | 2.66 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 5 at 15.9%. The model wanted `their` at 29.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `their` | 29.9% | 1.74 bits |
| 2 | `ins` | 20.2% | 2.31 bits |
| 3 | `the` | 17.8% | 2.49 bits |
| 4 | `in` | 16.2% | 2.63 bits |
| 5 | `a` | 15.9% | 2.66 bits |

</details>

<details><summary><code>in</code></summary>

**No.** `in` is rank 4 at 16.2%. The model wanted `their` at 29.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `their` | 29.9% | 1.74 bits |
| 2 | `ins` | 20.2% | 2.31 bits |
| 3 | `the` | 17.8% | 2.49 bits |
| 4 | `in` | 16.2% | 2.63 bits |
| 5 | `a` | 15.9% | 2.66 bits |

</details>

<details><summary><code>the</code></summary>

**No.** `the` is rank 3 at 17.8%. The model wanted `their` at 29.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `their` | 29.9% | 1.74 bits |
| 2 | `ins` | 20.2% | 2.31 bits |
| 3 | `the` | 17.8% | 2.49 bits |
| 4 | `in` | 16.2% | 2.63 bits |
| 5 | `a` | 15.9% | 2.66 bits |

</details>

<details><summary><code>their</code></summary>

**Correct.** The model's top token, at **29.9%** of the visible mass, carrying 1.74 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `their` | 29.9% | 1.74 bits |
| 2 | `ins` | 20.2% | 2.31 bits |
| 3 | `the` | 17.8% | 2.49 bits |
| 4 | `in` | 16.2% | 2.63 bits |
| 5 | `a` | 15.9% | 2.66 bits |

</details>

---

### 19. hard &nbsp;<sub>2.15 bits of entropy</sub>

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

---

### 20. hard &nbsp;<sub>1.99 bits of entropy</sub>

> Attention is quadratic in the length of the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>document</code></summary>

**No.** `document` is rank 3 at 17.6%. The model wanted `text` at 43.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `text` | 43.4% | 1.21 bits |
| 2 | `input` | 25.7% | 1.96 bits |
| 3 | `document` | 17.6% | 2.51 bits |
| 4 | `message` | 7.9% | 3.67 bits |
| 5 | `signal` | 5.5% | 4.18 bits |

</details>

<details><summary><code>message</code></summary>

**No.** `message` is rank 4 at 7.9%. The model wanted `text` at 43.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `text` | 43.4% | 1.21 bits |
| 2 | `input` | 25.7% | 1.96 bits |
| 3 | `document` | 17.6% | 2.51 bits |
| 4 | `message` | 7.9% | 3.67 bits |
| 5 | `signal` | 5.5% | 4.18 bits |

</details>

<details><summary><code>input</code></summary>

**No.** `input` is rank 2 at 25.7%. The model wanted `text` at 43.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `text` | 43.4% | 1.21 bits |
| 2 | `input` | 25.7% | 1.96 bits |
| 3 | `document` | 17.6% | 2.51 bits |
| 4 | `message` | 7.9% | 3.67 bits |
| 5 | `signal` | 5.5% | 4.18 bits |

</details>

<details><summary><code>text</code></summary>

**Correct.** The model's top token, at **43.4%** of the visible mass, carrying 1.21 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `text` | 43.4% | 1.21 bits |
| 2 | `input` | 25.7% | 1.96 bits |
| 3 | `document` | 17.6% | 2.51 bits |
| 4 | `message` | 7.9% | 3.67 bits |
| 5 | `signal` | 5.5% | 4.18 bits |

</details>

<details><summary><code>signal</code></summary>

**No.** `signal` is rank 5 at 5.5%. The model wanted `text` at 43.4%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `text` | 43.4% | 1.21 bits |
| 2 | `input` | 25.7% | 1.96 bits |
| 3 | `document` | 17.6% | 2.51 bits |
| 4 | `message` | 7.9% | 3.67 bits |
| 5 | `signal` | 5.5% | 4.18 bits |

</details>

---

### 21. medium &nbsp;<sub>1.69 bits of entropy</sub>

> The biggest risk in a database migration is **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>...</code></summary>

**No.** `...` is rank 4 at 8.7%. The model wanted `data` at 62.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `data` | 62.9% | 0.67 bits |
| 2 | `losing` | 11.0% | 3.19 bits |
| 3 | `the` | 9.3% | 3.43 bits |
| 4 | `...` | 8.7% | 3.52 bits |
| 5 | `that` | 8.1% | 3.62 bits |

</details>

<details><summary><code>the</code></summary>

**No.** `the` is rank 3 at 9.3%. The model wanted `data` at 62.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `data` | 62.9% | 0.67 bits |
| 2 | `losing` | 11.0% | 3.19 bits |
| 3 | `the` | 9.3% | 3.43 bits |
| 4 | `...` | 8.7% | 3.52 bits |
| 5 | `that` | 8.1% | 3.62 bits |

</details>

<details><summary><code>that</code></summary>

**No.** `that` is rank 5 at 8.1%. The model wanted `data` at 62.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `data` | 62.9% | 0.67 bits |
| 2 | `losing` | 11.0% | 3.19 bits |
| 3 | `the` | 9.3% | 3.43 bits |
| 4 | `...` | 8.7% | 3.52 bits |
| 5 | `that` | 8.1% | 3.62 bits |

</details>

<details><summary><code>losing</code></summary>

**No.** `losing` is rank 2 at 11.0%. The model wanted `data` at 62.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `data` | 62.9% | 0.67 bits |
| 2 | `losing` | 11.0% | 3.19 bits |
| 3 | `the` | 9.3% | 3.43 bits |
| 4 | `...` | 8.7% | 3.52 bits |
| 5 | `that` | 8.1% | 3.62 bits |

</details>

<details><summary><code>data</code></summary>

**Correct.** The model's top token, at **62.9%** of the visible mass, carrying 0.67 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `data` | 62.9% | 0.67 bits |
| 2 | `losing` | 11.0% | 3.19 bits |
| 3 | `the` | 9.3% | 3.43 bits |
| 4 | `...` | 8.7% | 3.52 bits |
| 5 | `that` | 8.1% | 3.62 bits |

</details>

---

### 22. easy &nbsp;<sub>1.16 bits of entropy</sub>

> Documentation rots faster than code because **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>people</code></summary>

**No.** `people` is rank 4 at 4.3%. The model wanted `it` at 78.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `it` | 78.8% | 0.34 bits |
| 2 | `...` | 7.2% | 3.80 bits |
| 3 | `code` | 6.0% | 4.06 bits |
| 4 | `people` | 4.3% | 4.54 bits |
| 5 | `the` | 3.7% | 4.74 bits |

</details>

<details><summary><code>it</code></summary>

**Correct.** The model's top token, at **78.8%** of the visible mass, carrying 0.34 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `it` | 78.8% | 0.34 bits |
| 2 | `...` | 7.2% | 3.80 bits |
| 3 | `code` | 6.0% | 4.06 bits |
| 4 | `people` | 4.3% | 4.54 bits |
| 5 | `the` | 3.7% | 4.74 bits |

</details>

<details><summary><code>...</code></summary>

**No.** `...` is rank 2 at 7.2%. The model wanted `it` at 78.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `it` | 78.8% | 0.34 bits |
| 2 | `...` | 7.2% | 3.80 bits |
| 3 | `code` | 6.0% | 4.06 bits |
| 4 | `people` | 4.3% | 4.54 bits |
| 5 | `the` | 3.7% | 4.74 bits |

</details>

<details><summary><code>the</code></summary>

**No.** `the` is rank 5 at 3.7%. The model wanted `it` at 78.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `it` | 78.8% | 0.34 bits |
| 2 | `...` | 7.2% | 3.80 bits |
| 3 | `code` | 6.0% | 4.06 bits |
| 4 | `people` | 4.3% | 4.54 bits |
| 5 | `the` | 3.7% | 4.74 bits |

</details>

<details><summary><code>code</code></summary>

**No.** `code` is rank 3 at 6.0%. The model wanted `it` at 78.8%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `it` | 78.8% | 0.34 bits |
| 2 | `...` | 7.2% | 3.80 bits |
| 3 | `code` | 6.0% | 4.06 bits |
| 4 | `people` | 4.3% | 4.54 bits |
| 5 | `the` | 3.7% | 4.74 bits |

</details>

---

### 23. medium &nbsp;<sub>1.66 bits of entropy</sub>

> A tokenizer splits text into pieces that are usually smaller than **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>the</code></summary>

**No.** `the` is rank 4 at 5.6%. The model wanted `words` at 55.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `words` | 55.7% | 0.84 bits |
| 2 | `a` | 27.8% | 1.85 bits |
| 3 | `sent` | 7.2% | 3.79 bits |
| 4 | `the` | 5.6% | 4.15 bits |
| 5 | `individual` | 3.6% | 4.80 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 2 at 27.8%. The model wanted `words` at 55.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `words` | 55.7% | 0.84 bits |
| 2 | `a` | 27.8% | 1.85 bits |
| 3 | `sent` | 7.2% | 3.79 bits |
| 4 | `the` | 5.6% | 4.15 bits |
| 5 | `individual` | 3.6% | 4.80 bits |

</details>

<details><summary><code>individual</code></summary>

**No.** `individual` is rank 5 at 3.6%. The model wanted `words` at 55.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `words` | 55.7% | 0.84 bits |
| 2 | `a` | 27.8% | 1.85 bits |
| 3 | `sent` | 7.2% | 3.79 bits |
| 4 | `the` | 5.6% | 4.15 bits |
| 5 | `individual` | 3.6% | 4.80 bits |

</details>

<details><summary><code>words</code></summary>

**Correct.** The model's top token, at **55.7%** of the visible mass, carrying 0.84 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `words` | 55.7% | 0.84 bits |
| 2 | `a` | 27.8% | 1.85 bits |
| 3 | `sent` | 7.2% | 3.79 bits |
| 4 | `the` | 5.6% | 4.15 bits |
| 5 | `individual` | 3.6% | 4.80 bits |

</details>

<details><summary><code>sent</code></summary>

**No.** `sent` is rank 3 at 7.2%. The model wanted `words` at 55.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `words` | 55.7% | 0.84 bits |
| 2 | `a` | 27.8% | 1.85 bits |
| 3 | `sent` | 7.2% | 3.79 bits |
| 4 | `the` | 5.6% | 4.15 bits |
| 5 | `individual` | 3.6% | 4.80 bits |

</details>

---

### 24. medium &nbsp;<sub>1.87 bits of entropy</sub>

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

---

### 25. hard &nbsp;<sub>1.91 bits of entropy</sub>

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

---

### 26. hard &nbsp;<sub>2.09 bits of entropy</sub>

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

---

### 27. easy &nbsp;<sub>1.22 bits of entropy</sub>

> The reason floating point addition is not associative is **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>...</code></summary>

**No.** `...` is rank 5 at 1.5%. The model wanted `because` at 71.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 71.7% | 0.48 bits |
| 2 | `due` | 20.1% | 2.32 bits |
| 3 | `that` | 5.1% | 4.29 bits |
| 4 | `a` | 1.6% | 5.96 bits |
| 5 | `...` | 1.5% | 6.06 bits |

</details>

<details><summary><code>because</code></summary>

**Correct.** The model's top token, at **71.7%** of the visible mass, carrying 0.48 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 71.7% | 0.48 bits |
| 2 | `due` | 20.1% | 2.32 bits |
| 3 | `that` | 5.1% | 4.29 bits |
| 4 | `a` | 1.6% | 5.96 bits |
| 5 | `...` | 1.5% | 6.06 bits |

</details>

<details><summary><code>due</code></summary>

**No.** `due` is rank 2 at 20.1%. The model wanted `because` at 71.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 71.7% | 0.48 bits |
| 2 | `due` | 20.1% | 2.32 bits |
| 3 | `that` | 5.1% | 4.29 bits |
| 4 | `a` | 1.6% | 5.96 bits |
| 5 | `...` | 1.5% | 6.06 bits |

</details>

<details><summary><code>a</code></summary>

**No.** `a` is rank 4 at 1.6%. The model wanted `because` at 71.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 71.7% | 0.48 bits |
| 2 | `due` | 20.1% | 2.32 bits |
| 3 | `that` | 5.1% | 4.29 bits |
| 4 | `a` | 1.6% | 5.96 bits |
| 5 | `...` | 1.5% | 6.06 bits |

</details>

<details><summary><code>that</code></summary>

**No.** `that` is rank 3 at 5.1%. The model wanted `because` at 71.7%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `because` | 71.7% | 0.48 bits |
| 2 | `due` | 20.1% | 2.32 bits |
| 3 | `that` | 5.1% | 4.29 bits |
| 4 | `a` | 1.6% | 5.96 bits |
| 5 | `...` | 1.5% | 6.06 bits |

</details>

---

### 28. hard &nbsp;<sub>2.25 bits of entropy</sub>

> Electron applications are criticised mainly for their **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>resource</code></summary>

**No.** `resource` is rank 2 at 24.2%. The model wanted `lack` at 27.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `lack` | 27.5% | 1.86 bits |
| 2 | `resource` | 24.2% | 2.05 bits |
| 3 | `ste` | 21.1% | 2.25 bits |
| 4 | `limited` | 16.6% | 2.59 bits |
| 5 | `complex` | 10.6% | 3.24 bits |

</details>

<details><summary><code>ste</code></summary>

**No.** `ste` is rank 3 at 21.1%. The model wanted `lack` at 27.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `lack` | 27.5% | 1.86 bits |
| 2 | `resource` | 24.2% | 2.05 bits |
| 3 | `ste` | 21.1% | 2.25 bits |
| 4 | `limited` | 16.6% | 2.59 bits |
| 5 | `complex` | 10.6% | 3.24 bits |

</details>

<details><summary><code>complex</code></summary>

**No.** `complex` is rank 5 at 10.6%. The model wanted `lack` at 27.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `lack` | 27.5% | 1.86 bits |
| 2 | `resource` | 24.2% | 2.05 bits |
| 3 | `ste` | 21.1% | 2.25 bits |
| 4 | `limited` | 16.6% | 2.59 bits |
| 5 | `complex` | 10.6% | 3.24 bits |

</details>

<details><summary><code>lack</code></summary>

**Correct.** The model's top token, at **27.5%** of the visible mass, carrying 1.86 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `lack` | 27.5% | 1.86 bits |
| 2 | `resource` | 24.2% | 2.05 bits |
| 3 | `ste` | 21.1% | 2.25 bits |
| 4 | `limited` | 16.6% | 2.59 bits |
| 5 | `complex` | 10.6% | 3.24 bits |

</details>

<details><summary><code>limited</code></summary>

**No.** `limited` is rank 4 at 16.6%. The model wanted `lack` at 27.5%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `lack` | 27.5% | 1.86 bits |
| 2 | `resource` | 24.2% | 2.05 bits |
| 3 | `ste` | 21.1% | 2.25 bits |
| 4 | `limited` | 16.6% | 2.59 bits |
| 5 | `complex` | 10.6% | 3.24 bits |

</details>

---

### 29. easy &nbsp;<sub>1.19 bits of entropy</sub>

> The first thing to check when a GPU is idle is the **___**

Which token does the model rank first? Open one to find out.

<details><summary><code>Power</code></summary>

**No.** `Power` is rank 2 at 8.4%. The model wanted `power` at 77.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `power` | 77.9% | 0.36 bits |
| 2 | `Power` | 8.4% | 3.58 bits |
| 3 | `GPU` | 5.4% | 4.20 bits |
| 4 | `driver` | 4.5% | 4.48 bits |
| 5 | `system` | 3.8% | 4.71 bits |

</details>

<details><summary><code>driver</code></summary>

**No.** `driver` is rank 4 at 4.5%. The model wanted `power` at 77.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `power` | 77.9% | 0.36 bits |
| 2 | `Power` | 8.4% | 3.58 bits |
| 3 | `GPU` | 5.4% | 4.20 bits |
| 4 | `driver` | 4.5% | 4.48 bits |
| 5 | `system` | 3.8% | 4.71 bits |

</details>

<details><summary><code>power</code></summary>

**Correct.** The model's top token, at **77.9%** of the visible mass, carrying 0.36 bits.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `power` | 77.9% | 0.36 bits |
| 2 | `Power` | 8.4% | 3.58 bits |
| 3 | `GPU` | 5.4% | 4.20 bits |
| 4 | `driver` | 4.5% | 4.48 bits |
| 5 | `system` | 3.8% | 4.71 bits |

</details>

<details><summary><code>system</code></summary>

**No.** `system` is rank 5 at 3.8%. The model wanted `power` at 77.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `power` | 77.9% | 0.36 bits |
| 2 | `Power` | 8.4% | 3.58 bits |
| 3 | `GPU` | 5.4% | 4.20 bits |
| 4 | `driver` | 4.5% | 4.48 bits |
| 5 | `system` | 3.8% | 4.71 bits |

</details>

<details><summary><code>GPU</code></summary>

**No.** `GPU` is rank 3 at 5.4%. The model wanted `power` at 77.9%.

| rank | token | probability | surprisal |
|---|---|---|---|
| 1 | `power` | 77.9% | 0.36 bits |
| 2 | `Power` | 8.4% | 3.58 bits |
| 3 | `GPU` | 5.4% | 4.20 bits |
| 4 | `driver` | 4.5% | 4.48 bits |
| 5 | `system` | 3.8% | 4.71 bits |

</details>

---

### 30. medium &nbsp;<sub>1.80 bits of entropy</sub>

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


---

[Back to the profile](https://github.com/UbhayAab) &middot; [Raw data](../game/draft.json)
