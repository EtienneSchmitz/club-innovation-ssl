---
id: archi
title: Architecture
sidebar_label: Architecture
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

La pile logiciel (`backend-node`) s'appuie sur une [architecture orienté service](https://www.redhat.com/fr/topics/cloud-native-apps/what-is-service-oriented-architecture).  
Un service est une unité atomique avec une fonctionnalité bien précise. Mis ensemble, les services permettent ainsi d'effectuer la tâche du logiciel entier.

:::note Exemple
La tâche de l'architecture backend-node est de pouvoir participer à un match de SSL.  
Un service serait la prise de décision ou la manipulation en vitesse du robot.
:::

Cette approche est à mettre en opposition à l'architecture traditionnelle du développement logiciel : architecture monolithique. La pile de NAMeC (`backend-cpp`) utilise cette architecture.
Ces deux types d'architectures (et leur variantes), présente chacun des avantages et des défauts.

:::info
A travers le cours du Club Innovation, l'accent sera mis sur les concepts clés à savoir de la SSL, cela permettra de ne pas vous rendre dépendant d'une plateforme ou d'une architecture (C++ ou NodeJS).
:::

## Schéma de l'architecture

![schéma - architecture](/img/ssl/ssl-package.png)

<!-- TODO : Le schéma est à mettre à jour ! (bots-placement à ajouter) -->

## Présentation des services

Dans la suite de ce chapitre, nous allons décrire précisément l'ensemble des fonctionnalités qu'apporte chaque service au projet.

### Présentation des entrées-sorties

#### Vision

Les données de vision sont transmises par [ssl-vision](https://github.com/RoboCup-SSL/ssl-vision) (réel) ou [grSim](https://gitlab.namec.fr/ssl/software/external/grSim) (simulation) sous format [protobuf](https://gitlab.namec.fr/ssl/software/external/grSim/-/tree/master/src/proto).

#### Game-Controller

TODO - A faire (17/12/2020)

#### Robot

TODO - A faire

#### Order

TODO - A faire

### Présentation interne

#### Structure principale

La structure principale se compose de cinq services.

<Tabs
defaultValue="network"
values={[
{label: 'network-gateway', value: 'network'},
{label: 'game-data', value: 'data'},
{label: 'MSB', value: 'msb'},
{label: 'bots-control', value: 'control'},
{label: 'bots-gateway', value: 'gateway'},
]}>
<TabItem value="network">

:::note Fonctionnalité
Réceptionner les données en entrées (vision ou game-controller).
:::
</TabItem>
<TabItem value="data">

:::note Fonctionnalité
Filtrer les données obtenus en entrée.
:::

</TabItem>
  
<TabItem value="msb">

:::note Fonctionnalité
Prise de décision en fonction d'un état du jeu.
:::

</TabItem>
<TabItem value="control">

:::note Fonctionnalité
Contrôler le robot à travers des ordres simples (aller à une position donnée, tirer, ...)
:::  
  
</TabItem>
<TabItem value="gateway">

:::note Fonctionnalité
Envoyer les ordres en vitesse au robot.
:::

</TabItem>
</Tabs>

#### Outils

Ces services sont dans le but de donner des outils et du confort au développeur.

<!-- TODO : APi gateway / bots placement -->

## Librairies externes

### ssl/types

### ssl/algorithm

