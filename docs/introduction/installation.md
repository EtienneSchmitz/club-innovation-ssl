---
id: install
title: Installation
---

La stack logiciel marchent exclusivement sur Linux et Mac, le simulateur (GrSim) n'est pas disponible sous Windows pour le moment.  

Vous trouverez ci-dessus l'installation manuel, l'équipe va mettre en place une image d'une machine virtuelle pour ce qui sont sous windows.

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
cp .env.example .env
```

#### Configuration des variables d'environnement

Chaque dossier contient un fichier `.env` où vous pouvez changer le degré du logging que vous allez voir dans la console en mettant la variable d'environnement **LOGLEVEL** à _info_, _warn_ ou _debug_.

##### Network-Gateway

La variable d'environnement, **YELLOW** permet d'indiquer à tout le programme la couleur de notre équipe (si vous voulez contrôler les robots bleus, mettez à false, sinon laissez à true).

##### MSB

TODO : Développement de MSB à finir avant de mettre ici.

##### Bots Gateway

La variable d'environnement, **SIMULATION** permet d'indiquer si l'ordre doit être envoyé à un robot physique ou un robot sous GrSim.

### Viewer

Le viewer est en cours de réecriture, il n'est plus disponible à l'installation.  
En l'état, il ne sert qu'à voir le terrain, ce qui peut se faire grâce à GrSim.  
Durant ce semestre, le viewer sera remis à jour et des améliorations y seront ajoutés.

## Logiciels de la ligue

### GrSim

Installer le paquet GrSim disponible à l'adresse [suivante](https://gitlab.namec.fr/ssl/software/external/grSim).  
N'installer pas celui proposé par la ligue SSL, NAMeC a fais quelques modifications dans le logiciel pour qu'il soit personnalisé à notre robot et à notre IA.   
Suivez les indications situés dans le [wiki](https://gitlab.namec.fr/ssl/software/backend/backend/-/wikis/Installation#grsim-simulator-see-usage-for-more-information)

### Game-controller

Allez à l'addresse [suivante](https://github.com/RoboCup-SSL/ssl-game-controller/releases) et installer le paquets de la dernière release selon votre os.
Au moment de l'écriture la version du game-controller est `2.3.0`.

