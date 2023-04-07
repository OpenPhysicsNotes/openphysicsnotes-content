---
title: Quantum Wave Function | Formulary
---

# Quantum Wave Function and Operators

## Basic properties

Properties:
 - linearity
 - de broglie relations $p = \hbar k = \hbar / \lambda$ (1) and $E = \hbar \omega = h \nu$ (2)
 - statistical interpretation (as probability density) of $|\psi|^2$

Plane wave ($p$ fixed):
$$
    \psi(x) = e^{\frac{i}{\hbar}px}
%\psi(x, t) = e^{i(px - \omega t)}
$${#eq:plane-wave} that satisfies the de broglie relation (1).

For linearity:
$$
\psi(x) = \int \frac{dp}{2\pi\hbar} e^{ipx/\hbar} \; \varphi(p) \equiv \int \frac{dk}{2\pi} e^{ikx} \; \varphi(k)
$${#qe:psi-ft .squared-red}
that is the fourier transform.

Normalization:
$$
\int \frac{dp}{2\pi\hbar} |\varphi(p)|^2 = \int dx |\psi(x)|^2 = 1
$${#eq:psi-normalization}


Statistical average (expectation) values can be defined:
$$
E_\psi[f] = \int dx \, |\psi(x)|^2 f(x)
$${#eq:expectation-value}

:::: note
::: todo
sposta
:::
$$
2\pi\delta(\alpha) = \int dx e^{i\alpha x}
$$

$$
\delta(f(x)) = \sum_i \frac{\delta(x - x_i)}{|f'(x_i)|} \;\; ; \;\; \delta(cx) = \frac{\delta(x)}{c}
$$
where $f(x_i) = 0$
::::

$$
\overline{p} = \int dx \, \psi^*(x) \frac{\hbar}{i} \frac{\partial}{\partial x} \psi(x)
$$

$$
\overline{p^n} = \int dx \, \psi^*(x) \left[\frac{\hbar}{i} \frac{\partial}{\partial x}\right]^n \psi(x)
$$

$$
\overline{f(p)} = \int dx \, \psi^*(x) \; f\left[\frac{\hbar}{i} \frac{\partial}{\partial x}\right] \psi(x)
$$

in the hilbert space, the scalar product is defined as:
$$
\langle \alpha | \beta \rangle = \int dx \, \psi_\alpha^*(x) \, \psi_\beta(x)
$${#eq:hermitian-scalar-product-on-hilbert-space}
(*bra-ket* notation) and:
$$
\langle \alpha | \beta \rangle = \langle \beta | \alpha \rangle ^*
$${#eq:hermitian-scalar-product-on-hilbert-space-2}

That is similar to the previous equations.

::: note
$$
\varphi(k) = \int dx \, e^{-ikx} \, \psi(x) = \int dx \, \psi_x^*(x) \, \psi(x) \equiv \braket{\psi_k | \psi}
$$
:::

### Operators
$$
\hat{q} \psi(x) \equiv x\psi(x) ;
\;\;\;
\hat{p} \psi(x) \equiv \frac{\hbar}{i}\frac{\partial}{\partial x} \psi(x) 
$$


|     | $\hat{p}$ | $\hat{q}$ |
|:---:|:---------:|:---------:|
| $x$ repr. | $\hat{q} \psi(x) \equiv x\psi(x)$ | $\hat{p} \psi(x) \equiv \frac{\hbar}{i}\frac{\partial}{\partial x} \psi(x)$ |
| $p$ repr.| $\hat{q} \varphi(p) \equiv i\hbar \frac{\partial}{\partial p} \varphi(p)$ | $\hat{p}\varphi(p) \equiv p \varphi(p) $


\sch

#### Adjoint operator

Adjoint operator $A^\dag$:
$$
\langle \alpha | A^\dag | \beta \rangle \equiv (\alpha, A^\dag \beta) = (A \alpha, \beta) = (\beta, A \alpha)^*
$$
in termini matriciali:
$$
A^\dag_{\alpha \beta} = A^*_{\beta \alpha}
$$

**Hermitian** (*self-adjoint*) operator:
$$
A = A^\dag
$${#eq:def-hermitian-op .squared-red}
in terms of matrix:
$$
A_{\alpha \beta} = A^*_{\beta \alpha} \;\; \text{} \;\; A = {A^T}^*
$$

::: note
In \qm ad dynamic observable is represented by a self-adjoint operator:
$$
\text{Observable} \; \longleftrightarrow \; \text{Hermitian operator}
$${#eq:observable-hermitian-op .squared-blue}
:::

::: note
*Hermitian* $\equiv$ *self-adjoint* if we ignore operators domain (self-adjoint requires $D(A) = D(A^\dag)$)
:::

$$
E_\psi[A] \equiv \langle \psi | A | \psi \rangle
$$
::: note
if $\psi \rightarrow e^{i\phi}\psi$, expectation values of observables does not change!
:::

> In \qm, a state is represented by a ray??? in a hilbert space

\eq_ref{eq:observable-hermitian-op}

## Free particle

By virtue of the de Broglie principle:
$$
\psi(x, t) = e^{i(kx - \omega t)}
$$
Phase velocity:
$$
kx - \omega t = 0 \;\; \Longrightarrow  \;\; x = \frac{\omega}{k}t \;\; \Longrightarrow  \;\; v_f = \frac{\omega}{k}
$${#eq:phase-vel}

::: note
light: $k = \omega / c$ so $v_f = c$
:::

\eq_ref{eq:phase-vel} + de Broglie:
$$
v_f = \frac{\hbar\omega}{\hbar k} = \frac{E}{p}
$$
while for a free particle
$$
v = \frac{2E}{p}
$$
but the quantum wave function does not represents a localized particle by itself, only its $|\cdot|^2$

**localized state**:
$$
\psi(x, t) = \int \frac{dk}{2\pi} e^{i(kx - \omega t)} f(k)
$$

::: todo
...
:::

#### Gaussian integrals

$$
\int_{-\infty}^{\infty} e^{-\frac{x^2}{2\sigma^2}} dx = \sqrt{2\pi\sigma^2}
$${#eq:gaussian-int}

### Group speed

::: todo
...
:::

### Gaussian packet

$$
\psi(x)|_{t=0} = \frac{1}{(\pi\sigma^2)^{1/4}} e^{iqx} e^{-\frac{x^2}{2\sigma^2}}
$$

## States and operators representation

space:
$$
\text{scalar product} = \int dx \psi_a^*(x) \psi_b(x)
$$
fourier transform
$$
\text{scalar product} = \int \frac{dp}{2\pi\hbar} \varphi_a^*(p) \varphi_b(p)
$$

Abstract states representation as $\ket{a}$, abstract operators representations: $\hat{P}$ and $\hat{Q}$

| | $\hat{P}$ | $\hat{Q}$ |
| --: | :--: | :--: |
| $x$ repr.: | $\frac{\hbar}{i}\frac{\partial}{\partial x}$ | $x$ |
| $p$ repr.: | $p$ | $i \hbar \frac{\partial}{\partial p}$ |

**Projector**:
$$
\Pi_a \equiv \ket{a}\bra{a}
$${#state-projector}

Operator definition in a finite base:
$$
A = \sum_{i,j} \ket{i}A_{ij}\bra{j}
$$
in fact, on two basis elements $\ket{a}$, $\ket{b}$:
$$
\braket{a|A|b} = \sum_{i,j} \braket{a|i} A_{ij} \braket {j|b} = \sum_{i,j} \delta_{ai} A_{ij} \delta_{jb} = A_{ab}
$$

## Operators and measurement

$$
E_\psi[A] = \sum_n p_n a_n
$$

...

- **Eigenstates** of an operator A = null dispersion states for A
- Possible _values_ for an observable, A, are its _eigenvalues_

### Spectrum

> The set of values $z$ such that $(A - x)\psi = 0$ has solution, i.e. set ov eigenvalues.

> **Spectral Theorem** (simplified):  
> Every *self-adjoint* operator A with discrete spectrum admits a _complete eigenvectors base_ of the hilbert space.

Important results:
- eigenvectors relative to different eigenvalues ar orthogonal
- it is always possible to choose an _orthonormal base_ of eigenvectors

...
$$
p_n = |c_n|^2 = |\braket{n|\psi}|^2
$$
...
$$
p_n = \sum_\alpha |c_{n,\alpha}|^2
$$

## Continuous spectrum

$$
\psi = \int d\alpha c_\alpha \ket{\alpha}
$$
if $f_\alpha$ and $f_\beta$ basis functions:
$$
\int dx f_\alpha^*(x) f_\beta(x) = \delta(\alpha - \beta)
$$
note that we could choose to define different normalizations:
$$
\int d\alpha \longrightarrow \int \frac{d\alpha}{N}
\;\; \Longrightarrow \;\;
\int \frac{dx}{N} f_\alpha^*(x) f_\beta(x) = \delta(\alpha - \beta)
$$

General case:
$$
\ket{\psi} = \sum_n c_n \ket{n} + \int d\alpha c_\alpha \ket{\alpha}
$${#eq:generic-spectral-th .squared-red}
hence, in the continuous:
$$
dP_\alpha = |c_\alpha|^2 \frac{d\alpha}{N}
$$

Formalization of spectrum definition:
> **Weyl criterium**: a value $\lambda$ belongs to the continuos *spectrum* of a *self-adjoint* operator if exists a normalizable state sequence $\psi_n$ such that:
> $$
> \lim_{n \rightarrow \infty} || A \psi_n - \lambda \psi_n || = 0 ;\;\;\;\; ||\psi_n|| = 1
> $$

::: details example {open-}
using
$$
\psi_n = \frac{1}{\pi^{1/4}n^{1/2}} e^{ipx/\hbar} e^{-x^2/2n^2}
$$
it is easy to prove that $p$ belongs to the spectrum of $\hat{p} = -i\hbar \partial_x$
:::

## Completeness relation

$$
1 = \sum_n \ket{n}\bra{n} + \int d\alpha \ket{\alpha}\bra{\alpha}
$${#eq:completeness-relation .squared-green}

## Functions of operators

::: todo
...
:::

## $P$ and $Q$ operators

#### Impulse eigenstates

Abstract eigenvalues equation:
$$
\hat{P} \ket{p} = p\ket{p}
$$
in the $x$ representation, $\hat{P} = -i\hbar\partial_x$:
$$
-i\hbar \partial_x \psi_p(x) = p\psi_p(x) \;\; \Longrightarrow \;\; \psi_p(x) = \exp(ipx/\hbar)
$$
::: note
orthogonality:
$$
\int dx \psi_{p_1}^*(x) \psi_{p_2}(x) = \int dx \exp(\frac{i}{\hbar}x(p_2 - p_1)) = 2 \pi \hbar \delta(p2 - p1)
$$
so $N = 2\pi\hbar${.squared-blue}
:::

$$
\varphi_p(s)  = 2 \pi \hbar \delta(p - s)
$$
::: details derivation
$$
\varphi_p(s) = \int dx e^{-isx/\hbar} \psi_p(x) = \int dx e^i{\frac{i}{\hbar}(p - s)} = 2 \pi \hbar \delta(p - s)
$$
:::

::: details scalar {open-}
$$
\begin{split}
\braket{p_1|p_2}
&= \int \frac{ds}{2\pi\hbar} \varphi_{p_1}^*(x) \varphi_{p_2}(x) \\
&= \int \frac{ds}{2\pi\hbar} 2\pi\hbar\delta(p_1 - s) 2\pi\hbar\delta(p_2 - s) \\
&= 2\pi\hbar\delta(p_1 - p_2)
\end{split}
$$
:::

#### Position eigenstates

$$
\hat{Q}\ket{x_0} = x_0\ket{x_0}
$$

$$
i\hbar\partial_p \varphi_{x_0}(p) = x_0 \varphi_{x_0}(p) \;\;\Longrightarrow\;\; \varphi_{x_0}(p) = e^{-ipx_0/\hbar}
$$
note the ["$-$" sign]{.red}.

## Wavefunction as amplitude

$$
\braket{x|\psi} = \int dy \psi_x^*(y) \psi(y) = \int dy \delta(x-y)\psi(y) = \psi(x)
$$

_Completeness relations_ in terms of $\hat{Q}$ and $\hat{P}$ eigenvectors:
$$
\ket{\psi} = \int dx \ket{x}\braket{x|\psi} \equiv \int dx \ket{x}\psi(x)
$$
$$
\ket{\psi} = \int \frac{dp}{2\pi\hbar} \ket{p}\braket{p|\psi} \equiv \int \frac{dp}{2\pi\hbar} \ket{p}\varphi(p)
$$

::: todo
sposta questa sotto?
:::
$$
\braket{i|A|j} = A_{ij}
$$

## Incompatible measures and commutators

> **Theorem**: If two operators $A$ and $B$ commute, it is always possible to find a common eigenstates base (we say them to be *simultaneous-observables* or *compatibles*).

### Existence of compatible observables

> **Theorem**: For each system exists a *maximal set of compatible observables* $\{A, B, C, ...\}$ t.c. simultaneous eigenstates $\ket{\alpha, \beta, \gamma, ...}$ are unequivocally determined without residual degenerations.

## Heisenberg indetermination principle

$$
[P_i, Q_j] = \frac{\hbar}{i} \delta_{i,j}
$$

> **Heisenberg indetermination principle**:
> $$
> \Delta P \Delta Q \geq \frac{\hbar}{2}
> $$

## Properties of the commutator

The most important
$$
[A, BC] = [A, B]C + B[A,C]
$$
similarly:
$$
[A, B^n] = B[A, B^{n-1}] + [A,B]B^{n-1}
$$

For $P$, $Q$:
$$
[P, Q^n] = \frac{\hbar}{i} n Q^{n-1}; \;\;\;\; [Q, P^n] = i\hbar n P^{n-1}
$$
hence:
$$
[P, f(Q)] = \frac{\hbar}{i} f'(Q); \;\;\;\; [Q, f(P)] = i\hbar f'(P)
$$

Poisson:
$$
\{u, v\}_{cl} = \frac{\partial u}{\partial q}\frac{\partial v}{\partial p} - \frac{\partial u}{\partial p}\frac{\partial v}{\partial q}
$$

$$
[Q, P] = i\hbar\{q, p\}_{cl}
$$






<div style="height: 50vh"></div>

::: todo
class "live-only" or "dev-oly"
:::