---
title: Schrodinger Equation Study
---


# Schrodinger Equation Study

1D problem, stationary (eigenvalue problem):
$$
-\frac{\hbar}{2m}\psi''(x) + V(x) \psi(x) = E \psi(x)
$${.squared-red}
- *linear* and *homogenous* $\Rightarrow$ the eigenvalue $E$ does not depends on the normalization
- if $V(x)$ is regular, it is a *Cauchy* problem, this implies:
  - the solution is unique
  - the roots are all *simple*, (in fact, if it was $\psi(x_0) = \psi'(x_0) = 0$, the, the solution would be $\psi(x) = 0$)
- the eigenvalue problem is a limit problem, eigenvalues could not exist \red{scrivi meglio tradotto}
- two interesting classes of solutions:
   1. **bounded state** when the solution is $\mathbb{L}^2$
   2. **unbounded (free) state**s when the solution is not $\mathbb{L}^2$ but it behaves like a plane wave


## Confined particle

in $0 \leq x \leq L$, *eigenvalues* problem:
$$
\psi'' + \frac{2m}{\hbar}E\psi = 0
$$
That has solutions in the form:
$$
\psi(x) = c_1 \sin(x) + c_2 \cos(c)
$$
but we have $\psi(0) = \psi(L) = 0$:
$$
\frac{\hbar^2 k^2}{2m} = E
$$
so:
$$
c_2 = 0; \;\;
k_n = n \frac{\pi}{L}; \;\;
E_n = \frac{\hbar^2}{2m}k_n^2
$$

The spectrum is _discrete_ and _non-degenerate_ \red{??}

::: todo
fai esercizi 4.1.1
:::

## Properties of the problem

Two zones
- $E > V(x)$ *classically **allowed*** zone (*C.A.Z*)
- $E < V(x)$ *classically **forbidden*** zone (*C.F.Z*) (the particle would have negative kinetic energy)

\newcommand{\CAZ}{classically allowed zone}
\newcommand{\CFZ}{classically forbidden zone}
\newcommand{\caz}{*C.A.Z*} <!-- TODO tooltips -->
\newcommand{\cfz}{*C.F.Z*} <!-- TODO tooltips -->

We can write:
$$
\psi'' = \frac{2m}{\hbar}(V-E)\psi
$${.squared}
This shows that in a \cfz $text{sign}(\psi'') = text{sign}(\psi)$:
1. in a \cfz solutions have a *monotone* trend, typically $\sim\exp$
2. in a \caz solutions can have an *oscillatory* trend

::: todo
figure
:::

::: note
For now we will suppose that $V$ has a limit for $x \rightarrow \infty$, possibly infinite.
:::

::: note
_In 1D_, a _second order_ equation has _general solutions_ that are a _superposition_ of _two independent solutions_, so for each eigenvalue $E$ we can have, at most, a degeneration of 2.
:::

::: todo
... :warning::warning::warning::warning::warning::warning::warning::warning:
:::
::: todo
... :warning::warning::warning::warning::warning::warning::warning::warning:
:::
::: todo
... :warning::warning::warning::warning::warning::warning::warning::warning:
:::
::: todo
... :warning::warning::warning::warning::warning::warning::warning::warning:
:::


!!endspace

[^my-fn]: ciao a tutti
[^my-fn-2]: ciao a tutti