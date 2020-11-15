---
id: install
title: Installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::note
L'ensemble de la pile logiciel a été testé sous *Linux* (Manjaro et dernière LTS d'Ubuntu), *Mac* et le système wsl **2** de *Windows*.
:::

## Logiciel de l'équipe

### Backend Node

L'installation se fait en deux temps : par l'installation des logiciels puis la configuration des variables d'environnement.

#### Installation des dépendances

Installer node.js et npm avec une version supèrieure ou égale à la version 14.0 via ce [lien](https://nodejs.org/en/download/package-manager/). Normalement l'installation de node.js inclut npm.

Si vous voulez tester votre environnement, testez les sorties des deux commandes suivantes :

> node --version  
> npm --version

#### Installation des dépôts

Cloner le dépôt via cette commande :

> git clone https://gitlab.namec.fr/ssl/software/backend-node/backend-node.git --recursive

Un script `install-dependencies.sh` a été crée dans le but d'installer l'ensemble des dépendances.

Si le script ne marches pas pour votre OS, dans chaque dossier faites les commandes suivantes :

> npm install  
> cp .env.example .env

## Logiciels de la ligue

### GrSim

N'installer pas celui proposé par la ligue SSL, NAMeC a fais quelques modifications dans le logiciel pour qu'il soit personnalisé à notre robot et à notre IA.  
Suivez les indications situés dans le [wiki](https://gitlab.namec.fr/ssl/software/backend/backend/-/wikis/Installation#grsim-simulator-see-usage-for-more-information) (commande d'installation spécifique à Ubuntu).

### Game-controller

Allez à l'addresse [suivante](https://github.com/RoboCup-SSL/ssl-game-controller/releases) et installer le paquet de la dernière release selon votre os.
Au moment de l'écriture la version du game-controller est `2.3.0`.

## Test d'installation

1. Lancer GrSim. Aller dans le dossier d'installation de grsim et lancer la commande suivante :

> ./bin/grsim


2. Dans un terminal, dans le dossier bots-gateway, lancer la commande suivante :

> npm run repl

3. Lorsqu'un prompt `$mol` apparait à l'écran, effectuez la commande suivante :

:::note
Il est possible que vous devez appuyer sur la touche entrée si le mol n'apparait pas au bout de 30 secondes.
:::

> call "bots-gateway.control" '{ "id" : 1, "yellow" : true, "velocity" : { "normal" : 0, "angular": 0.2, "tangent" : 0 }}'


Si le robot jaune avec l'id 1 tourne autour de lui-même dans le simulateur GrSim, votre installation est fonctionnel !

