---
id: prerequisite
title: Prérequis
sidebar_label: Prérequis
---

## NodeJS

NodeJS est un environnement bas-niveau permettant l'éxecution de code Javascript côté serveur.  
Nous utiliserons très peu de fonctionnalités de NodeJS, il est néanmoins important de savoir que nous sommes sur un environnement NodeJS.

## NPM

NPM est le gestionnaire de paquets officiel de Node.JS. 
Il permet d'installer les dépendances nécessaires à chaque service et de pouvoir facilement lancer des commandes via la création d'un fichier (`package.json`).

Pour télécharger les dépendances listés dans le fichier package.json, il faut faire la commande `npm install`. Cette commande va vous faire apparaître un dossier `node_modules` contenant l'enterieté des dépendances.

Pour lancer des commandes avec npm, il suffit de lancer dans le terminal, la commande suivante `npm run <nom_commande>`, avec le nom de la commande que vous voulez éxécuter.

## GIT

Git est un logiciel de version décentralisé. C'est un outil indispensable pour n'importe quelle développeur.

Les fonctionnalités utilisés pour le cours sont les suivantes :
- Commiter du code,
- Envoyer et recevoir du code,
- Branches.

Nous utilisons un dernier concept qui sont les **sous-modules**, ce concept n'est pas important pour la bonne compréhension du cours. 

A cette [adresse](https://learngitbranching.js.org/?locale=fr_FR), vous trouverez un tutoriel interactif.
Si vous préferez les vidéos, voici un cours intéressant sur [Youtube](https://www.grafikart.fr/formations/git).

## Typescript

Typescript est un sur-ensemble syntaxique strict de JavaScript libre et open-source développé par Microsoft. Il permet d'ajouter le typage statique tout en compilant en Javascript. 

Le site du projet se trouve à l'adresse [suivante](https://www.typescriptlang.org/). 
Si vous voulez vous entrainer, vous pouvez l'essayer dans un environnement  [bac à sable](https://www.typescriptlang.org/play/).  

:::note
Si vous avez déjà des connaissances dans un langage **orienté objet** - Typescript s'inspirant d'autres langage de programmation - vous pouvez directement travailler sans avoir besoin de suivre des tutoriels.
:::

Nous utiliserons des fonctionnalités basiques en Typescript. Les principales connaissances à savoir sont les suivantes :
- [Types basiques](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Classes](https://www.typescriptlang.org/docs/handbook/classes.html) & [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Functions](https://www.typescriptlang.org/docs/handbook/functions.html)

Si vous n'avez aucune connaissance en orienté objet, vous pourrez regarder les cours de Xavier Blanc sur [Youtube](https://www.youtube.com/playlist?list=PLuNTRFkYD3u5ibkjD1nHP9QZXPjtvnPXL).

Voici un tutoriel vidéo (long mais complet) sur [Typescript](https://www.youtube.com/watch?v=BwuLxPH8IDs&ab_channel=Academind)

## Récapitulatif des liens importants

- Documentation NodeJS : https://nodejs.org/
- Site NPM : https://www.npmjs.com/
- Site Typescript : https://www.typescriptlang.org/