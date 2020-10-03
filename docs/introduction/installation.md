---
id: install
title: Installation
---

La stack logiciel marchent seulement sur Linux et Mac, le simulateur (GrSim) n'est pas disponible sous Windows pour le moment.

## Logiciel de l'équipe

### Backend Node

L'installation se fait en deux temps, on commence par l'installation puis ensuite par la configuration des variables d'environnement.

#### Installation des dépôts

Cloner le dépôt via cette commande :

```
    git clone ssh://git@gitlab.namec.fr:2222/ssl/software/backend-node/backend-node.git --recursive-modules
```

> Vous pouvez aussi utiliser le lien https si vous n'avez pas de clé SSH stocké sur le GitLab.

Un script (install-dependencies) a été crée dans le but de parcourir de parcourir l'entièreté des dossiers et d'installer les dépendances NodeJS.

Si le script ne marches pas pour votre OS, dans chaque dossier faites les commandes suivantes :
```
npm install
cp .env-example .env
```

#### Configuration des variables d'environnement

##### Network-Gateway

TODO : En cours de rédaction/résolution d'un bug car on doit indiquer l'adresse ip privée à la place de la locale (seule difficulté de cette installation).

##### Game Data

Dans le `.env`, vous pouvez changer le degré du logging en mettant la variable d'environnement **LOGLEVEL** à _info_, _warn_ ou _debug_.

##### MSB

TODO : Développement de MSB à finir avant de mettre ici.

##### Bots Control

Dans le `.env`, vous pouvez changer le degré du logging en mettant la variable d'environnement **LOGLEVEL** à _info_, _warn_ ou _debug_.

##### Bots Gateway

TODO : En cours de rédaction/résolution d'un bug car on doit indiquer l'adresse ip privée à la place de la locale (seule difficulté de cette installation).

### Viewer

Le viewer est en cours de réecriture, il n'est plus disponible à l'installation.  
En l'état, il ne sert qu'à voir le terrain, ce qui peut se faire grâce à GrSim.  
Durant ce semestre, le viewer sera remis à jour et des améliorations y seront ajoutés.

## Logiciels de la ligue

### GrSim

TODO : En cours de rédaction

### Game-controller

Allez à l'addresse [suivante](https://github.com/RoboCup-SSL/ssl-game-controller) et installer le paquets de la dernière release selon votre os.
Au moment de l'écriture la version du game-controller est `2.3.0`.

