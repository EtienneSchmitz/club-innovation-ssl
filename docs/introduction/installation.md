---
id: install
title: Installation
---

La pile logiciel marche exclusivement sur Linux (toute distribution, testée sous la dernière version de Manjaro et Ubuntu >= 18.04) et Mac, le simulateur (GrSim) n'est pas disponible sous Windows pour le moment.

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

Installer le paquet GrSim disponible à l'adresse [suivante](https://gitlab.namec.fr/ssl/software/external/grSim).  
N'installer pas celui proposé par la ligue SSL, NAMeC a fais quelques modifications dans le logiciel pour qu'il soit personnalisé à notre robot et à notre IA.  
Suivez les indications situés dans le [wiki](https://gitlab.namec.fr/ssl/software/backend/backend/-/wikis/Installation#grsim-simulator-see-usage-for-more-information) (commande d'installation spécifique à Ubuntu).

### Game-controller

Allez à l'addresse [suivante](https://github.com/RoboCup-SSL/ssl-game-controller/releases) et installer le paquet de la dernière release selon votre os.
Au moment de l'écriture la version du game-controller est `2.3.0`.

## Test d'installation

1. Lancer GrSim

2. Dans des terminaux différents, aller dans les quatres dossiers différents (network-gateway, game-data, bots-control), lancer la commande suivante :

> npm run dev

3. Dans un autre terminal, dans le dossier bots-gateway, lancer la commande suivante :

> npm run repl

4. Ensuite dans l'invité de commande, effectuez la commande suivante lorsque le prompt mol apparait :

> call "bots-gateway.control" '{ "id" : 1, "dribblerEnabled" : false, "kick" : false, "chipKick": false, "velocity" : { "normal" : 0, "angular": 0.2, "tangent" : 0 }}'

Vous devrez normalement voir le robot 1 bleu tourné sur GRSim. Votre installation marche !
