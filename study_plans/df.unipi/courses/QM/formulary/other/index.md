---
title: other
---

## Poli

> $z_0$: singolarità isolata per cui
> $$
> \lim_{z\rightarrow z_0} |f(z)| = \pm\infty
> $$

> **Ordine** $k$ del polo: numero di termini della parte principale della serie di laurent, ovvero $k$ t.c.:
> $$
> b_k = lim_{z\rightarrow z_0} f(z)(z-z_0)^k
> $$
> esiste e $k\neq 0$, $k < \infty$

Serie di laurent:
$$
f(z) = \sum\limits_{n=-k}^\infty a_n (z-z_0)^n,
$$

## Residuo

$$
\text{Res}(f, z_0) = \frac{1}{2\pi i} \oint_{\gamma_r}f(z)dz = a_{-1}
$${.squared-red n}

Per polo di ordine $k$ si calcola:
$$
\text{Res}(f, z_0) = \frac{1}{(k - 1)!}\lim_{z\rightarrow z_0} \frac{d^{k-1}}{dz^{k-1}}\left[(z-z_0)^k\cdot f(z)\right]
$$
Polo semplice ($k = 1$)
$$
a_{-1} = \lim_{z \to z_0} [(z - z_0) \cdot f(z)]
$${.squared}
e se $f = g/h$, con taylor:
$$
\text{Res}(f, z_0) = \frac{g(z)}{h'(z)}
$${.squared}

> **Teorema fondamentale dei residui** (semplificato):
> $$
> \begin{split}
> \oint_\Gamma f(z) dz &= 2\pi i \sum_{k = 1}^{N_{int}} \text{Res}\left[f(z), z_k\right]\\
> &= -2\pi i \sum_{k = 1}^{N_{ext}} \text{Res}\left[f(z), z_k\right] - 2\pi i\,\text{Res}\left[f(z), \infty\right]
> \end{split}
> $$

## Lemma di Jordan

<!-- TODO \Complex funziona ma quando converto in latex, mitex da errore \Complex non definito, per ora usiamo C, fai un sistema per definire delle macro aggiuntive-->
> Data una funzione $f(z)$ continua su $\mathbb{C}$, sia $\gamma_R$ un arco di circonferenza centrato nell'origine del piano di Gauss e raggio $R$ la cui ascissa curvilinea si estenda tra $\theta_1$ e $\theta_2$, tali che $0\leq\theta_1<\theta_2\leq\pi$. Se
> $$
> \lim_{R \rightarrow +\infty}\;\max_{\theta\in[\theta_1;\theta_2]}|f(Re^{i\theta})|=0
> $$
> allora
> $$
> \lim_{R \rightarrow +\infty} \int_{\gamma_R} f(z)e^{i\omega z} dz=0
> $${.squared}
> ove $\omega$ è un qualunque numero reale positivo.

Si osservi che tale arco di circonferenza giace nel semipiano superiore del piano di Gauss. In effetti è sufficiente che $\gamma_R$ sia omotopo ad un arco di circonferenza.

