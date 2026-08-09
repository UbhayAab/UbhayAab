# Tic-tac-toe

No server. No GitHub Action. No JavaScript. You still cannot win.

The entire game tree is pre-rendered below as nested disclosure triangles. Every
move you can make is already here, along with the computer's minimax-optimal
reply. Click your move, read the board, click your next move.

You are `X` and you move first, which is the larger advantage in this game.
Numbers mark the empty squares.

```
1 2 3
4 5 6
7 8 9
```

Of the 569 games reachable from here, **386 end with the computer winning**
and **183 end in a draw**. None end with you winning. A draw is a perfect score.

---

<details><summary><code>play 1</code></summary>

```
X 2 3
4 O 6
7 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
4 O 6
7 8 9
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
X X O
X O 6
O 8 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X X O
4 O X
O 8 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
X X O
O O 6
X 8 9
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
X X O
O O X
X O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 9</code></summary>

```
X X O
O O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X X O
O O O
X X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X X O
O O O
X 8 X
```

Computer takes **6**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X X O
4 O 6
O X 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X X O
4 O 6
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 3</code></summary>

```
X O X
4 O 6
7 8 9
```

Computer takes **2**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O 6
7 O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X O X
4 O X
7 O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
X O X
4 O 6
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
X O X
O O 6
7 X 9
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
X O X
O O X
7 X O
```

Computer takes **9**. Your move.

<details><summary><code>play 7</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
X O X
O O O
X X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X O X
O O O
7 X X
```

Computer takes **6**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X O X
4 O 6
7 O X
```

Computer takes **8**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
X 2 3
X O 6
O 8 9
```

Computer takes **7**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
X O 6
O 8 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
X O X
X O 6
O 8 9
```

Computer takes **2**. Your move.

<details><summary><code>play 6</code></summary>

```
X O X
X O X
O O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
X O X
X O O
O X 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X O X
X O 6
O O X
```

Computer takes **8**. **Computer wins.**

</details>

</details>

<details><summary><code>play 6</code></summary>

```
X 2 O
X O X
O 8 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
X 2 O
X O 6
O X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X 2 O
X O 6
O 8 X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 6</code></summary>

```
X O 3
4 O X
7 8 9
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
4 O X
7 O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
X O 3
X O X
7 O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
X O 3
4 O X
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
X O 3
4 O X
O X 9
```

Computer takes **7**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
4 O X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
X O O
X O X
O X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X O O
4 O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X O 3
4 O X
7 O X
```

Computer takes **8**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
X 2 3
O O 6
X 8 9
```

Computer takes **4**. Your move.

<details><summary><code>play 2</code></summary>

```
X X 3
O O O
X 8 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
X 2 X
O O O
X 8 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X O 3
O O X
X 8 9
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
O O X
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
X O 3
O O X
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X O 3
O O X
X O X
```

Computer takes **8**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X 2 3
O O O
X X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X 2 3
O O O
X 8 X
```

Computer takes **6**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X 2 3
O O 6
7 X 9
```

Computer takes **4**. Your move.

<details><summary><code>play 2</code></summary>

```
X X 3
O O O
7 X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
X 2 X
O O O
7 X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X 2 O
O O X
7 X 9
```

Computer takes **3**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O O X
O X 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
X 2 O
O O X
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X 2 O
O O X
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
X 2 3
O O O
X X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X 2 3
O O O
7 X X
```

Computer takes **6**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X O 3
4 O 6
7 8 X
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
4 O 6
7 O X
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
X O 3
X O 6
7 O X
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X O 3
4 O X
7 O X
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
X O 3
4 O 6
X O X
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
X O 3
4 O 6
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
4 O O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
X O O
X O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X O O
4 O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

</details>

</details>

<details><summary><code>play 2</code></summary>

```
O X 3
4 5 6
7 8 9
```

Computer takes **1**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
O 5 6
7 8 9
```

Computer takes **4**. Your move.

<details><summary><code>play 5</code></summary>

```
O X X
O X 6
O 8 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X X
O 5 X
O 8 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X X
O O 6
X 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 6</code></summary>

```
O X X
O O X
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X X
O O O
X X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X X
O O O
X 8 X
```

Computer takes **6**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X X
O 5 6
O X 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X X
O 5 6
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O X 3
X O 6
7 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
X O 6
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X 3
X O X
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X 3
X O 6
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X 3
X O 6
7 X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X O
X O 6
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X O
X O 6
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O X 3
4 X 6
7 O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 X 6
O O 9
```

Computer takes **7**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X X 6
O O O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X X
O X X
O O 9
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X X
O X 6
O O X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O X 3
X X O
7 O 9
```

Computer takes **6**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
X X O
O O 9
```

Computer takes **7**. Your move.

<details><summary><code>play 9</code></summary>

```
O X X
X X O
O O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X O
X X O
X O 9
```

Computer takes **3**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X O
X X O
7 O X
```

Computer takes **3**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X 3
O X X
7 O 9
```

Computer takes **4**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
O X X
O O 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
O X X
X O 9
```

Computer takes **3**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X 3
O X X
O O X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X O
4 X 6
X O 9
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X X O
X O 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
O X X
X O 9
```

Computer takes **4**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X O
O X 6
X O X
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X O
4 X 6
7 O X
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X X O
7 O X
```

Computer takes **6**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
O X X
7 O X
```

Computer takes **4**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X O
O X 6
X O X
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X 3
4 5 X
O 8 9
```

Computer takes **7**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
O 5 X
O 8 9
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O X 3
X O X
O 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
X O X
O 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X O
X O X
O X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O X 3
O X X
O 8 9
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X 3
O 5 X
O X 9
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X 3
O 5 X
O 8 X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X 3
4 O 6
X 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 O 6
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O X 3
X O 6
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X 3
4 O X
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X 3
4 O 6
X X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X 3
4 O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 O O
X O X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X O O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
4 O X
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X 3
4 O 6
7 X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 O 6
7 X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O X 3
X O 6
7 X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X 3
4 O X
7 X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X 3
4 O 6
X X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X 3
4 O 6
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
O O 6
O X X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O X O
X O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X O
4 O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X 3
4 O 6
7 8 X
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 O O
7 8 X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X O O
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 8</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X X
O O O
X 8 X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X X
O O O
7 X X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O X O
X O 6
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X O
X O 6
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
4 O X
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
4 O X
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X O
4 O X
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X 3
4 O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 O O
X O X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X O O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
4 O X
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X 3
4 O 6
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
O O 6
O X X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O X O
X O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X O
4 O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

</details>

</details>

<details><summary><code>play 3</code></summary>

```
1 2 X
4 O 6
7 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
4 O 6
7 8 9
```

Computer takes **2**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O 6
7 O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X O X
4 O X
7 O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
X O X
4 O 6
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
X O X
O O 6
7 X 9
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
X O X
O O X
7 X O
```

Computer takes **9**. Your move.

<details><summary><code>play 7</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
X O X
O O O
X X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X O X
O O O
7 X X
```

Computer takes **6**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X O X
4 O 6
7 O X
```

Computer takes **8**. **Computer wins.**

</details>

</details>

<details><summary><code>play 2</code></summary>

```
O X X
4 O 6
7 8 9
```

Computer takes **1**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X O 6
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X X
4 O X
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X X
4 O 6
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X X
4 O 6
7 X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X X
4 O O
7 8 X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X O O
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 8</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X X
O O O
X 8 X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X X
O O O
7 X X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O 2 X
X O 6
7 8 9
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O 6
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O 2 X
X O X
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O 2 X
X O 6
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O 2 X
X O 6
7 X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O 2 X
X O O
7 8 X
```

Computer takes **6**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 8</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O 2 X
X O O
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O 2 X
X O O
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
1 2 X
4 O X
7 8 O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
4 O X
7 8 O
```

Computer takes **2**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O X
7 O O
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
X O X
4 O X
X O O
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
X O X
O O X
7 X O
```

Computer takes **4**. Your move.

<details><summary><code>play 7</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 2</code></summary>

```
O X X
4 O X
7 8 O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O 2 X
X O X
7 8 O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O 2 X
4 O X
X 8 O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O 2 X
4 O X
7 X O
```

Computer takes **1**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
1 O X
4 O 6
X 8 9
```

Computer takes **2**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
4 O 6
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
1 O X
X O 6
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
1 O X
4 O X
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
1 O X
4 O 6
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
O O 6
X X O
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O X
X O 6
X X O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O X
4 O X
X X O
```

Computer takes **1**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 O X
4 O 6
X O X
```

Computer takes **8**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
1 2 X
O O 6
7 X 9
```

Computer takes **4**. Your move.

<details><summary><code>play 1</code></summary>

```
X 2 X
O O O
7 X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 2</code></summary>

```
1 X X
O O O
7 X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
1 2 X
O O X
7 X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
O O X
7 X O
```

Computer takes **2**. Your move.

<details><summary><code>play 7</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 2</code></summary>

```
O X X
O O X
7 X O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O 2 X
O O X
X X O
```

Computer takes **1**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
1 2 X
O O O
X X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
1 2 X
O O O
7 X X
```

Computer takes **6**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 2 X
4 O O
7 8 X
```

Computer takes **6**. Your move.

<details><summary><code>play 1</code></summary>

```
X 2 X
O O O
7 8 X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 2</code></summary>

```
1 X X
O O O
7 8 X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O 2 X
X O O
7 8 X
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 8</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O 2 X
X O O
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O 2 X
X O O
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 7</code></summary>

```
1 2 X
O O O
X 8 X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
1 2 X
O O O
7 X X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O 2 3
X 5 6
7 8 9
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X 3
X O 6
7 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
X O 6
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X 3
X O X
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X 3
X O 6
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X 3
X O 6
7 X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X O
X O 6
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X O
X O 6
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 3</code></summary>

```
O 2 X
X O 6
7 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O 6
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O 2 X
X O X
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O 2 X
X O 6
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O 2 X
X O 6
7 X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O 2 X
X O O
7 8 X
```

Computer takes **6**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 8</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O 2 X
X O O
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O 2 X
X O O
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O 2 3
X X O
7 8 9
```

Computer takes **6**. Your move.

<details><summary><code>play 2</code></summary>

```
O X 3
X X O
7 O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
X X O
O O 9
```

Computer takes **7**. Your move.

<details><summary><code>play 9</code></summary>

```
O X X
X X O
O O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X O
X X O
X O 9
```

Computer takes **3**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X O
X X O
7 O X
```

Computer takes **3**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 3</code></summary>

```
O 2 X
X X O
O 8 9
```

Computer takes **7**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X X O
O O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 9</code></summary>

```
O X X
X X O
O O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O O X
X X O
O X 9
```

Computer takes **2**. Your move.

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O 8 X
```

Computer takes **2**. Your move.

<details><summary><code>play 8</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O 2 O
X X O
X 8 9
```

Computer takes **3**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
X X O
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
X X O
X X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
X X O
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O O 3
X X O
7 X 9
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
O O X
X X O
O X 9
```

Computer takes **7**. Your move.

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O O O
X X O
X X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
X X O
7 X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O O 3
X X O
7 8 X
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
O O X
X X O
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 8</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O O O
X X O
X 8 X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
X X O
7 X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O 2 3
X O X
7 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 2</code></summary>

```
O X 3
X O X
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
O 2 X
X O X
7 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O 2 3
X O X
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O 2 3
X O X
7 X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O 2 O
X O X
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O O O
X O X
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
X O X
7 X X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O O 3
X 5 6
X 8 9
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
O O X
X O 6
X 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 6</code></summary>

```
O O X
X O X
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O X
X O 6
X X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O X
X O 6
X O X
```

Computer takes **8**. **Computer wins.**

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O O O
X X 6
X 8 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
X 5 X
X 8 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
X 5 6
X X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
X 5 6
X 8 X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O 2 O
X 5 6
7 X 9
```

Computer takes **3**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
X O 6
7 X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
O X 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
X O 6
X X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X O
X O 6
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O O O
X X 6
7 X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
X 5 X
7 X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O O O
X 5 6
X X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
X 5 6
7 X X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O 2 O
X 5 6
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
X O 6
7 8 X
```

Computer takes **5**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X O
X O 6
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O O O
X X 6
7 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
X 5 X
7 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O O O
X 5 6
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
X 5 6
7 X X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O 2 3
4 X 6
7 8 9
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X 3
4 X 6
7 O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 X 6
O O 9
```

Computer takes **7**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X X 6
O O O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X X
O X X
O O 9
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X X
O X 6
O O X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O X 3
X X O
7 O 9
```

Computer takes **6**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
X X O
O O 9
```

Computer takes **7**. Your move.

<details><summary><code>play 9</code></summary>

```
O X X
X X O
O O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X O
X X O
X O 9
```

Computer takes **3**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X O
X X O
7 O X
```

Computer takes **3**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X 3
O X X
7 O 9
```

Computer takes **4**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
O X X
O O 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
O X X
X O 9
```

Computer takes **3**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X 3
O X X
O O X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X O
4 X 6
X O 9
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X X O
X O 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
O X X
X O 9
```

Computer takes **4**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X O
O X 6
X O X
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X O
4 X 6
7 O X
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X X O
7 O X
```

Computer takes **6**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
O X X
7 O X
```

Computer takes **4**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X O
O X 6
X O X
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

</details>

<details><summary><code>play 3</code></summary>

```
O 2 X
4 X 6
O 8 9
```

Computer takes **7**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
O X 6
O 8 9
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O 2 X
X X O
O 8 9
```

Computer takes **6**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X X O
O O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 9</code></summary>

```
O X X
X X O
O O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O O X
X X O
O X 9
```

Computer takes **2**. Your move.

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O 8 X
```

Computer takes **2**. Your move.

<details><summary><code>play 8</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O 2 X
O X X
O 8 9
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O 2 X
O X 6
O X 9
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O 2 X
O X 6
O 8 X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O 2 3
X X O
7 8 9
```

Computer takes **6**. Your move.

<details><summary><code>play 2</code></summary>

```
O X 3
X X O
7 O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
X X O
O O 9
```

Computer takes **7**. Your move.

<details><summary><code>play 9</code></summary>

```
O X X
X X O
O O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X O
X X O
X O 9
```

Computer takes **3**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X O
X X O
7 O X
```

Computer takes **3**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 3</code></summary>

```
O 2 X
X X O
O 8 9
```

Computer takes **7**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X X O
O O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 9</code></summary>

```
O X X
X X O
O O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O O X
X X O
O X 9
```

Computer takes **2**. Your move.

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O 8 X
```

Computer takes **2**. Your move.

<details><summary><code>play 8</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O 2 O
X X O
X 8 9
```

Computer takes **3**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
X X O
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
X X O
X X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
X X O
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O O 3
X X O
7 X 9
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
O O X
X X O
O X 9
```

Computer takes **7**. Your move.

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O O O
X X O
X X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
X X O
7 X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O O 3
X X O
7 8 X
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
O O X
X X O
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 8</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O O O
X X O
X 8 X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
X X O
7 X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O 2 3
O X X
7 8 9
```

Computer takes **4**. Your move.

<details><summary><code>play 2</code></summary>

```
O X 3
O X X
O 8 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
O 2 X
O X X
O 8 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O 2 O
O X X
X 8 9
```

Computer takes **3**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
O X X
X O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O O O
O X X
X X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
O X X
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O 2 3
O X X
O X 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O 2 3
O X X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O 2 O
4 X 6
X 8 9
```

Computer takes **3**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
4 X 6
X O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X X O
X O 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
O X X
X O 9
```

Computer takes **4**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X O
O X 6
X O X
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X X 6
X 8 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
4 X X
X 8 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
4 X 6
X X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
4 X 6
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O O 3
4 X 6
7 X 9
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
O O X
4 X 6
O X 9
```

Computer takes **7**. Your move.

<details><summary><code>play 4</code></summary>

```
O O X
X X O
O X 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O O X
O X X
O X 9
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O X
O X 6
O X X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X X 6
7 X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
4 X X
7 X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O O O
4 X 6
X X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
4 X 6
7 X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O 2 O
4 X 6
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
4 X 6
7 O X
```

Computer takes **8**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X X O
7 O X
```

Computer takes **6**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
X X O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
O X X
7 O X
```

Computer takes **4**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X O
O X 6
X O X
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X X 6
7 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
4 X X
7 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O O O
4 X 6
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
4 X 6
7 X X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
1 2 O
4 5 X
7 8 9
```

Computer takes **3**. Your move.

<details><summary><code>play 1</code></summary>

```
X 2 O
O 5 X
7 8 9
```

Computer takes **4**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O O X
7 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 7</code></summary>

```
X X O
O O X
X O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 9</code></summary>

```
X X O
O O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X X O
O O X
O X 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X X O
O O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 5</code></summary>

```
X 2 O
O X X
7 8 O
```

Computer takes **9**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O X X
7 O O
```

Computer takes **8**. Your move.

<details><summary><code>play 7</code></summary>

```
X X O
O X X
X O O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
X O O
O X X
X 8 O
```

Computer takes **2**. Your move.

<details><summary><code>play 8</code></summary>

```
X O O
O X X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X O O
O X X
7 X O
```

Computer takes **2**. Your move.

<details><summary><code>play 7</code></summary>

```
X O O
O X X
X X O
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 7</code></summary>

```
X 2 O
O O X
X 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O O X
X O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 9</code></summary>

```
X X O
O O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X 2 O
O O X
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X 2 O
O O X
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O O X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X 2 O
O O X
7 X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O O X
O X 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
X 2 O
O O X
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X 2 O
O O X
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X 2 O
O O X
7 8 X
```

Computer takes **5**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
X 2 O
O O X
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X 2 O
O O X
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 2</code></summary>

```
1 X O
O 5 X
7 8 9
```

Computer takes **4**. Your move.

<details><summary><code>play 1</code></summary>

```
X X O
O O X
7 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 7</code></summary>

```
X X O
O O X
X O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 9</code></summary>

```
X X O
O O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X X O
O O X
O X 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X X O
O O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 5</code></summary>

```
1 X O
O X X
7 O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 1</code></summary>

```
X X O
O X X
7 O O
```

Computer takes **9**. Your move.

<details><summary><code>play 7</code></summary>

```
X X O
O X X
X O O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X O
O X X
X O 9
```

Computer takes **1**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X O
O X X
7 O X
```

Computer takes **1**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 7</code></summary>

```
1 X O
O O X
X 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X X O
O O X
X O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 9</code></summary>

```
X X O
O O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
1 X O
O O X
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X X O
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 X O
O O X
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 1</code></summary>

```
X X O
O O X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 8</code></summary>

```
1 X O
O O X
7 X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X X O
O O X
O X 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
1 X O
O O X
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X X O
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 X O
O O X
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 X O
O 5 X
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 1</code></summary>

```
X X O
O O X
O 8 X
```

Computer takes **5**. **Computer wins.**

</details>

<details><summary><code>play 5</code></summary>

```
O X O
O X X
O 8 X
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X O
O 5 X
O X X
```

Computer takes **1**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
1 2 O
X O X
7 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X 2 O
X O X
O 8 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 2</code></summary>

```
1 X O
X O X
O 8 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O 2 O
X O X
X 8 9
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
X O X
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
X O X
X X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
X O X
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
1 2 O
X O X
O X 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
1 2 O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 5</code></summary>

```
1 2 O
O X X
7 8 9
```

Computer takes **4**. Your move.

<details><summary><code>play 1</code></summary>

```
X 2 O
O X X
7 8 O
```

Computer takes **9**. Your move.

<details><summary><code>play 2</code></summary>

```
X X O
O X X
7 O O
```

Computer takes **8**. Your move.

<details><summary><code>play 7</code></summary>

```
X X O
O X X
X O O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
X O O
O X X
X 8 O
```

Computer takes **2**. Your move.

<details><summary><code>play 8</code></summary>

```
X O O
O X X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X O O
O X X
7 X O
```

Computer takes **2**. Your move.

<details><summary><code>play 7</code></summary>

```
X O O
O X X
X X O
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 2</code></summary>

```
1 X O
O X X
7 O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 1</code></summary>

```
X X O
O X X
7 O O
```

Computer takes **9**. Your move.

<details><summary><code>play 7</code></summary>

```
X X O
O X X
X O O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X O
O X X
X O 9
```

Computer takes **1**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O X O
O X X
7 O X
```

Computer takes **1**. Your move.

<details><summary><code>play 7</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O 2 O
O X X
X 8 9
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
O X X
X O 9
```

Computer takes **8**. Your move.

<details><summary><code>play 9</code></summary>

```
O X O
O X X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O O O
O X X
X X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
O X X
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
1 O O
O X X
7 X 9
```

Computer takes **2**. Your move.

<details><summary><code>play 1</code></summary>

```
X O O
O X X
7 X O
```

Computer takes **9**. Your move.

<details><summary><code>play 7</code></summary>

```
X O O
O X X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O O O
O X X
X X 9
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
O X X
7 X X
```

Computer takes **1**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O 2 O
O X X
7 8 X
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
O X X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O O O
O X X
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
O X X
7 X X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O 2 O
4 5 X
X 8 9
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
4 O X
X 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X O
4 O X
X X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X O
4 O X
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X 5 X
X 8 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 5</code></summary>

```
O O O
4 X X
X 8 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
4 5 X
X X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
4 5 X
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O 2 O
4 5 X
7 X 9
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
4 O X
7 X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
O X 9
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
4 O X
X X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X O
4 O X
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X 5 X
7 X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 5</code></summary>

```
O O O
4 X X
7 X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O O O
4 5 X
X X 9
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
4 5 X
7 X X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O 2 O
4 5 X
7 8 X
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
4 5 X
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **5**. **Computer wins.**

</details>

<details><summary><code>play 5</code></summary>

```
O X O
O X X
O 8 X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X O
O 5 X
O X X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X 5 X
7 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 5</code></summary>

```
O O O
4 X X
7 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O O O
4 5 X
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
4 5 X
7 X X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 7</code></summary>

```
1 2 3
4 O 6
X 8 9
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X 2 3
O O 6
X 8 9
```

Computer takes **4**. Your move.

<details><summary><code>play 2</code></summary>

```
X X 3
O O O
X 8 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
X 2 X
O O O
X 8 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X O 3
O O X
X 8 9
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
O O X
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
X O 3
O O X
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X O 3
O O X
X O X
```

Computer takes **8**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
X 2 3
O O O
X X 9
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X 2 3
O O O
X 8 X
```

Computer takes **6**. **Computer wins.**

</details>

</details>

<details><summary><code>play 2</code></summary>

```
O X 3
4 O 6
X 8 9
```

Computer takes **1**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 O 6
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O X 3
X O 6
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X 3
4 O X
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X 3
4 O 6
X X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O X 3
4 O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 O O
X O X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X O O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
4 O X
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

</details>

<details><summary><code>play 3</code></summary>

```
1 O X
4 O 6
X 8 9
```

Computer takes **2**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
4 O 6
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
1 O X
X O 6
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
1 O X
4 O X
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
1 O X
4 O 6
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
O O 6
X X O
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O X
X O 6
X X O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O X
4 O X
X X O
```

Computer takes **1**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 O X
4 O 6
X O X
```

Computer takes **8**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O 2 3
X O 6
X 8 9
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X 3
X O 6
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
O 2 X
X O 6
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O 2 3
X O X
X 8 O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O 2 3
X O 6
X X O
```

Computer takes **9**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O 2 3
X O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 3</code></summary>

```
O O X
X O 6
X O X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O 3
X O X
X O X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
1 O 3
4 O X
X 8 9
```

Computer takes **2**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
4 O X
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
1 O X
4 O X
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
1 O 3
X O X
X O 9
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
1 O 3
4 O X
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
O O X
X X O
```

Computer takes **4**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 3</code></summary>

```
O O X
4 O X
X X O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O O 3
X O X
X X O
```

Computer takes **1**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 O 3
4 O X
X O X
```

Computer takes **8**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
1 2 3
4 O 6
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X 2 3
O O 6
X X O
```

Computer takes **4**. Your move.

<details><summary><code>play 2</code></summary>

```
X X 3
O O O
X X O
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
X 2 X
O O O
X X O
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X O 3
O O X
X X O
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 2</code></summary>

```
O X 3
4 O 6
X X O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
O 2 X
4 O 6
X X O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O 2 3
X O 6
X X O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O 2 3
4 O X
X X O
```

Computer takes **1**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 2 3
4 O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
4 O 6
X O X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 2</code></summary>

```
O X 3
4 O 6
X O X
```

Computer takes **1**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 O O
X O X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X O O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
4 O X
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 3</code></summary>

```
1 O X
4 O 6
X O X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
1 O 3
X O 6
X O X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
1 O 3
4 O X
X O X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 8</code></summary>

```
1 O 3
4 5 6
7 X 9
```

Computer takes **2**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
4 5 6
O X 9
```

Computer takes **7**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
4 O 6
O X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O O
O X 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
X O X
4 O X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X O X
4 O O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
X O 3
X O 6
O X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
X O O
O X 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
X O O
X O X
O X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X O O
X O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 5</code></summary>

```
X O 3
4 X 6
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
O X 6
O X O
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
X O X
O X X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
X O 3
X X O
O X O
```

Computer takes **6**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
X X O
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
X O 3
O X X
O X O
```

Computer takes **4**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
O X X
O X O
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
X O 3
4 O X
O X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
4 O X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
X O O
X O X
O X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X O O
4 O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X O 3
4 O 6
O X X
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
4 O O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
X O O
X O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X O O
4 O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 3</code></summary>

```
1 O X
4 5 6
O X 9
```

Computer takes **7**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
4 O 6
O X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O O
O X 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
X O X
4 O X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
X O X
4 O O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
1 O X
X O 6
O X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
X O O
O X 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
1 O X
X O X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
X O X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 O X
X O O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O O X
4 X 6
O X 9
```

Computer takes **1**. Your move.

<details><summary><code>play 4</code></summary>

```
O O X
X X O
O X 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O O X
O X X
O X 9
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O X
O X 6
O X X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

<details><summary><code>play 6</code></summary>

```
1 O X
4 5 X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
O 5 X
O X O
```

Computer takes **4**. Your move.

<details><summary><code>play 5</code></summary>

```
X O X
O X X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
1 O X
X O X
O X O
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
X O X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 5</code></summary>

```
1 O X
O X X
O X O
```

Computer takes **4**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
O X X
O X O
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 O X
4 5 O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
4 O O
O X X
```

Computer takes **5**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O X
X 5 O
O X X
```

Computer takes **1**. Your move.

<details><summary><code>play 5</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O O X
4 X O
O X X
```

Computer takes **1**. Your move.

<details><summary><code>play 4</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
1 O 3
X 5 6
O X 9
```

Computer takes **7**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
X O 6
O X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
X O O
O X 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
X O O
X O X
O X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X O O
X O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 3</code></summary>

```
1 O X
X O 6
O X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
X O O
O X 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
1 O X
X O X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
X O X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 O X
X O O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 5</code></summary>

```
1 O 3
X X O
O X 9
```

Computer takes **6**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
X X O
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
X X O
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 3</code></summary>

```
O O X
X X O
O X 9
```

Computer takes **1**. Your move.

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
O O 3
X X O
O X X
```

Computer takes **1**. Your move.

<details><summary><code>play 3</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
1 O 3
X O X
O X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X O O
X O X
O X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
1 O X
X O X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
X O X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 O O
X O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 O O
X 5 6
O X X
```

Computer takes **3**. Your move.

<details><summary><code>play 1</code></summary>

```
X O O
X O 6
O X X
```

Computer takes **5**. **Computer wins.**

</details>

<details><summary><code>play 5</code></summary>

```
O O O
X X 6
O X X
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
X 5 X
O X X
```

Computer takes **1**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O O 3
4 X 6
7 X 9
```

Computer takes **1**. Your move.

<details><summary><code>play 3</code></summary>

```
O O X
4 X 6
O X 9
```

Computer takes **7**. Your move.

<details><summary><code>play 4</code></summary>

```
O O X
X X O
O X 9
```

Computer takes **6**. Your move.

<details><summary><code>play 9</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O O X
O X X
O X 9
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O X
O X 6
O X X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X X 6
7 X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
4 X X
7 X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O O O
4 X 6
X X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O O
4 X 6
7 X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 6</code></summary>

```
1 O 3
4 5 X
O X 9
```

Computer takes **7**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
4 O X
O X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
4 O X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
X O O
X O X
O X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
X O O
4 O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 3</code></summary>

```
1 O X
4 5 X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
O 5 X
O X O
```

Computer takes **4**. Your move.

<details><summary><code>play 5</code></summary>

```
X O X
O X X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
1 O X
X O X
O X O
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
X O X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 5</code></summary>

```
1 O X
O X X
O X O
```

Computer takes **4**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
O X X
O X O
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
1 O 3
X O X
O X 9
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X O O
X O X
O X 9
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
1 O X
X O X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
X O X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 O O
X O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 5</code></summary>

```
1 O 3
O X X
O X 9
```

Computer takes **4**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
O X X
O X O
```

Computer takes **9**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
O X X
O X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 3</code></summary>

```
O O X
O X X
O X 9
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 9</code></summary>

```
O O 3
O X X
O X X
```

Computer takes **1**. **Computer wins.**

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 O O
4 5 X
O X X
```

Computer takes **3**. Your move.

<details><summary><code>play 1</code></summary>

```
X O O
4 O X
O X X
```

Computer takes **5**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X 5 X
O X X
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 5</code></summary>

```
O O O
4 X X
O X X
```

Computer takes **1**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 7</code></summary>

```
1 O 3
4 5 6
X X O
```

Computer takes **9**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
O 5 6
X X O
```

Computer takes **4**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
O O 6
X X O
```

Computer takes **5**. Your move.

<details><summary><code>play 6</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 5</code></summary>

```
X O O
O X 6
X X O
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
X O O
O X X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
X O O
O 5 X
X X O
```

Computer takes **3**. Your move.

<details><summary><code>play 5</code></summary>

```
X O O
O X X
X X O
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 3</code></summary>

```
1 O X
4 O 6
X X O
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
O O 6
X X O
```

Computer takes **4**. Your move.

<details><summary><code>play 6</code></summary>

```
X O X
O O X
X X O
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O X
X O 6
X X O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O X
4 O X
X X O
```

Computer takes **1**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O 3
X 5 6
X X O
```

Computer takes **1**. Your move.

<details><summary><code>play 3</code></summary>

```
O O X
X O 6
X X O
```

Computer takes **5**. **Computer wins.**

</details>

<details><summary><code>play 5</code></summary>

```
O O O
X X 6
X X O
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
X 5 X
X X O
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 5</code></summary>

```
1 O O
4 X 6
X X O
```

Computer takes **3**. Your move.

<details><summary><code>play 1</code></summary>

```
X O O
4 X O
X X O
```

Computer takes **6**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X X 6
X X O
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
4 X X
X X O
```

Computer takes **1**. **Computer wins.**

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O O 3
4 5 X
X X O
```

Computer takes **1**. Your move.

<details><summary><code>play 3</code></summary>

```
O O X
4 O X
X X O
```

Computer takes **5**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X 5 X
X X O
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 5</code></summary>

```
O O O
4 X X
X X O
```

Computer takes **3**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 O 3
4 5 6
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
4 O 6
O X X
```

Computer takes **5**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
4 O O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
X O O
X O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X O O
4 O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 3</code></summary>

```
1 O X
4 5 O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 1</code></summary>

```
X O X
4 O O
O X X
```

Computer takes **5**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O O X
X 5 O
O X X
```

Computer takes **1**. Your move.

<details><summary><code>play 5</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O O X
4 X O
O X X
```

Computer takes **1**. Your move.

<details><summary><code>play 4</code></summary>

```
O O X
X X O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
1 O O
X 5 6
O X X
```

Computer takes **3**. Your move.

<details><summary><code>play 1</code></summary>

```
X O O
X O 6
O X X
```

Computer takes **5**. **Computer wins.**

</details>

<details><summary><code>play 5</code></summary>

```
O O O
X X 6
O X X
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
X 5 X
O X X
```

Computer takes **1**. **Computer wins.**

</details>

</details>

<details><summary><code>play 5</code></summary>

```
O O 3
4 X 6
O X X
```

Computer takes **1**. Your move.

<details><summary><code>play 3</code></summary>

```
O O X
O X 6
O X X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X X 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O O
4 X X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

<details><summary><code>play 6</code></summary>

```
1 O O
4 5 X
O X X
```

Computer takes **3**. Your move.

<details><summary><code>play 1</code></summary>

```
X O O
4 O X
O X X
```

Computer takes **5**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O O O
X 5 X
O X X
```

Computer takes **1**. **Computer wins.**

</details>

<details><summary><code>play 5</code></summary>

```
O O O
4 X X
O X X
```

Computer takes **1**. **Computer wins.**

</details>

</details>

</details>

</details>

<details><summary><code>play 9</code></summary>

```
1 2 3
4 O 6
7 8 X
```

Computer takes **5**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
4 O 6
7 8 X
```

Computer takes **2**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
4 O 6
7 O X
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
X O 3
X O 6
7 O X
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X O 3
4 O X
7 O X
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
X O 3
4 O 6
X O X
```

Computer takes **8**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
X O 3
4 O 6
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 3</code></summary>

```
X O X
4 O O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
X O X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
X O O
X O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
X O O
4 O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 2</code></summary>

```
O X 3
4 O 6
7 8 X
```

Computer takes **1**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 O O
7 8 X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X O O
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 8</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X X
O O O
X 8 X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O X X
O O O
7 X X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O X O
X O 6
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X O
X O 6
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
4 O X
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
4 O X
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X O
4 O X
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O X 3
4 O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 O O
X O X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X O O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
4 O X
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X 3
4 O 6
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
O O 6
O X X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O X O
X O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O X O
4 O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 3</code></summary>

```
1 2 X
4 O O
7 8 X
```

Computer takes **6**. Your move.

<details><summary><code>play 1</code></summary>

```
X 2 X
O O O
7 8 X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 2</code></summary>

```
1 X X
O O O
7 8 X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O 2 X
X O O
7 8 X
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 8</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O 2 X
X O O
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O 2 X
X O O
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 7</code></summary>

```
1 2 X
O O O
X 8 X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
1 2 X
O O O
7 X X
```

Computer takes **4**. **Computer wins.**

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O 2 3
X O 6
7 8 X
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
X O 6
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O X O
X O 6
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 3</code></summary>

```
O 2 X
X O O
7 8 X
```

Computer takes **6**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O 8 X
```

Computer takes **7**. Your move.

<details><summary><code>play 8</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O 2 X
X O O
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O 2 X
X O O
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O 2 O
X O X
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
O O O
X O X
X 8 X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 8</code></summary>

```
O O O
X O X
7 X X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
O 2 3
X O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 3</code></summary>

```
O O X
X O 6
X O X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
O O 3
X O X
X O X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
O 2 3
X O 6
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 2</code></summary>

```
O X O
X O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
O 2 X
X O O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O 2 O
X O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

</details>

<details><summary><code>play 6</code></summary>

```
1 2 O
4 O X
7 8 X
```

Computer takes **3**. Your move.

<details><summary><code>play 1</code></summary>

```
X 2 O
4 O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 2</code></summary>

```
1 X O
4 O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
1 2 O
X O X
O 8 X
```

Computer takes **7**. **Computer wins.**

</details>

<details><summary><code>play 7</code></summary>

```
1 2 O
4 O X
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 1</code></summary>

```
X O O
4 O X
X O X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 2</code></summary>

```
O X O
4 O X
X O X
```

Computer takes **1**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
1 O O
X O X
X O X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
1 2 O
4 O X
O X X
```

Computer takes **7**. **Computer wins.**

</details>

</details>

<details><summary><code>play 7</code></summary>

```
1 2 3
4 O 6
X O X
```

Computer takes **8**. Your move.

<details><summary><code>play 1</code></summary>

```
X O 3
4 O 6
X O X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 2</code></summary>

```
O X 3
4 O 6
X O X
```

Computer takes **1**. Your move.

<details><summary><code>play 3</code></summary>

```
O X X
4 O O
X O X
```

Computer takes **6**. Your move.

<details><summary><code>play 4</code></summary>

```
O X X
X O O
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 4</code></summary>

```
O X O
X O 6
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 6</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

<details><summary><code>play 6</code></summary>

```
O X O
4 O X
X O X
```

Computer takes **3**. Your move.

<details><summary><code>play 4</code></summary>

```
O X O
X O X
X O X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 3</code></summary>

```
1 O X
4 O 6
X O X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
1 O 3
X O 6
X O X
```

Computer takes **2**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
1 O 3
4 O X
X O X
```

Computer takes **2**. **Computer wins.**

</details>

</details>

<details><summary><code>play 8</code></summary>

```
1 2 3
4 O 6
O X X
```

Computer takes **7**. Your move.

<details><summary><code>play 1</code></summary>

```
X 2 O
4 O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 2</code></summary>

```
1 X O
4 O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 3</code></summary>

```
1 2 X
4 O O
O X X
```

Computer takes **6**. Your move.

<details><summary><code>play 1</code></summary>

```
X 2 X
O O O
O X X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 2</code></summary>

```
1 X X
O O O
O X X
```

Computer takes **4**. **Computer wins.**

</details>

<details><summary><code>play 4</code></summary>

```
O 2 X
X O O
O X X
```

Computer takes **1**. Your move.

<details><summary><code>play 2</code></summary>

```
O X X
X O O
O X X
```

**Draw.** Best available.

</details>

</details>

</details>

<details><summary><code>play 4</code></summary>

```
1 2 O
X O 6
O X X
```

Computer takes **3**. **Computer wins.**

</details>

<details><summary><code>play 6</code></summary>

```
1 2 O
4 O X
O X X
```

Computer takes **3**. **Computer wins.**

</details>

</details>

</details>


---

Generated by [`scripts/gen-ttt.mjs`](../scripts/gen-ttt.mjs) from a depth-aware minimax search:
951 positions, committed once, zero runtime cost forever.

[Back to the profile](https://github.com/UbhayAab)
