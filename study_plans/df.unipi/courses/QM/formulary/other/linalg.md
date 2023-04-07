---
title: linear algebra
---

# Linear Algebra
--A basic linear algebra formulary from QM--

<!-- TODO a <small> under a title sould have no space and be authomatically centered (maybe also gray) -->

## Commutator

https://en.wikipedia.org/wiki/Commutator

### Definition

In  general
$$
[g, h] := g^{-1}h^{-1}gh
$${#eq:def-commutator}
while on a [ring](https://en.wikipedia.org/wiki/Ring_(mathematics)) (multiplication, sum but inverse might not exist, for example matrixes or operators) we use a different definition:
$$
[a, b] := ab - ba
$${#eq:def-commutator-ring .squared}
while the anticommutator:
$$
[a, b]_\_ \equiv \{a, b\} := ab + ba
$${#eq:def-anticommutator-ring}

### Properties

#### Lie-algebra identities
- if two operators commute ($ab = ba$): $[a, b] = 0$
- $[a, a] = 0$
- $[\lambda a, b] = [a, \lambda b] = \lambda [a, b]$
- $[a, b] = -[b, a]$
- $[a + b, c] = [a, c] + [b, c]$
- $[a, [b,c]] + [b,[c,a]] + [c,[a,b]] = 0${.squared-blue} ([Jacobi Identity](https://en.wikipedia.org/wiki/Jacobi_identity))
- $[a, bc] = [a,b]c + b[a,c]${.squared-blue} ([Leibniz rule](https://it.wikipedia.org/wiki/Regola_di_Leibniz))

#### Additional identities
- $[A, BC] = [A, B]C + B[A, C]$ ([Leibniz rule](https://it.wikipedia.org/wiki/Regola_di_Leibniz))
- $[A, BCD] = [A, B]CD + B[A, C]D + BC[A, D]$
- $[A, BCDE] = [A, B]CDE + B[A, C]DE + BC[A, D]E + BCD[A, E]$
- $[AB, C] = A[B, C] + [A, C]B$
- $[ABC, D] = AB[C, D] + A[B, D]C + [A, D]BC$
- $[ABCD, E] = ABC[D, E] + AB[C, E]D + A[B, E]CD + [A, E]BCD$
- $[A, B + C] = [A, B] + [A, C]$
- $[A + B, C + D] = [A, C] + [A, D] + [B, C] + [B, D]$
- $[AB, CD] = A[B, C]D + [A, C]BD + CA[B, D] + C[A, D]B =A[B, C]D + AC[B,D] + [A,C]DB + C[A, D]B$
- $[[A, C], [B, D]] = [[[A, B], C], D] + [[[B, C], D], A] + [[[C, D], A], B] + [[[D, A], B], C]$

#### Notes

- if $A, B$ are matrix and $[A, B] = 0$, they can be _simultaneously diagonalized_


### Other applications
--other usefull applications in QM--

- if $[A, B]$ is a c-number: $e^A B e^{-A} = B + [A, B]$