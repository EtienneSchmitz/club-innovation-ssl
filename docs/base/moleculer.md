---
id: moleculer
title: Moleculer
sidebar_label: Moleculer
---

## Définition

[Moleculer](https://moleculer.services/) est un framework open-source de micro-services pour Node.JS.
A travers ce chapitre, nous allons y décrire un bref résumé de ces fonctionnalités principales que nous utilisons dans le cas du projet.  
Si vous avez des doutes ou des questions, n'hésitez pas à poser vos questions, mais tout d'abord liser la [documentation](https://moleculer.services/docs/0.14/), qui est très complète du framework.

## Concepts généraux

:::info
Les concepts généraux sont expliqués dans cette partie de la [documentation](https://moleculer.services/docs/0.14/concepts.html).  
Ils sont ensuite détaillé dans chaque partie spécifique.
:::

Dans les concepts généraux, vous devez comprendre l'utilité d'un [service](https://moleculer.services/docs/0.14/concepts.html#Service) ainsi que le rôle du [service broker](https://moleculer.services/docs/0.14/concepts.html#Service-Broker) attachés à chaque service.

### Services

:::info
La partie de la documentation traitant sur les services est disponible à cette [adresse](https://moleculer.services/docs/0.14/services.html).
:::

Les services sont la brique principale du framework et vont être décrit à travers un [schéma](https://moleculer.services/docs/0.14/services.html#Schema).  
Dans ce schéma, nous allons y distinguer les éléments suivants :
- le [nom et la version](https://moleculer.services/docs/0.14/services.html#Base-properties)
- les [options](https://moleculer.services/docs/0.14/services.html#Settings) tels que le transpoteur utilisé, la sérialisation, les options du logging.
- les [actions](https://moleculer.services/docs/0.14/services.html#Actions)
- les [évènements](https://moleculer.services/docs/0.14/services.html#Events)

:::note
Les évènements se base sur le design pattern [Publish-Subscribe](https://fr.wikipedia.org/wiki/Publish-subscribe) tandis que les actions se base sur les requêtes HTTP.
:::

:::tip 
Vous trouverez plus d'explications pour les [évènements](https://moleculer.services/docs/0.14/events.html) et les [actions](https://moleculer.services/docs/0.14/actions.html).  
Soyez sûr de bien comprendre ces notions avant de continuer, elles sont importantes !
:::

### Cycle de vie d'un service

Dans Moleculer, nous pouvons effectuer des instructions :
- avant le service commence.
- avant que le service se stoppe.

:::info
Vous trouverez l'ensemble des éléments du cycle de vie dans cette [partie](https://moleculer.services/docs/0.14/lifecycle.html) de la documentation.
