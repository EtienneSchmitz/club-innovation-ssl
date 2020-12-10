---
id: math
title: Maths
sidebar_label: Mathématique
---

## Notions

Les notions de vecteur, de normes et de coordonnées de vecteur doivent être maitrisé.

## Changement de repère

Il existe plusieurs repères sur le terrain : 
- repère t - terrain (axe  $\vec{u},\vec{v}$)
- repère r - robot (axe $\vec{tangent},\vec{normale}$)

![schéma - maths](/img/ssl/explication_repere.png)

Notons les éléments suivants :
- ${}^t\vec{v}$ : Coordonées du vecteur vitesse $\vec{v}$ exprimé dans le repère $t$.
- ${}^r\vec{v}$ : Coordonées du vecteur vitesse $\vec{v}$ exprimé dans le repère $r$.
- ${}^rR_t$ : Matrice de rotation dans le repère $R$ au repère $T$.
- $\theta$ : orientation du robot

Posons les éléments suivants :  
$$
{}^r\vec{v} = {}^rR_t * {}^t\vec{v} = R_{-\theta} * {}^t\vec{v}
$$

$$
R_{\theta} = \begin{pmatrix} cos(\theta) & -sin(\theta)\\ sin(\theta) & cos(\theta) \end{pmatrix} \\ \ \\
R_{-\theta} = \begin{pmatrix} cos(\theta) & sin(\theta) \\ -sin(\theta) & cos(\theta) \end{pmatrix}	 	 
$$
