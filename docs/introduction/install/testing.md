---
id: testing
title: Testing
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Pour chaque test, vous devrez obligatoirement avoir lancé GRSim.

Voici la procédure pour une installation _globale_ (make install effectué) ou _locale_.
<!--
A déplacer
-->

<Tabs
    defaultValue="loc"
    groupId="install-system"
    values={[
        { label: 'Locale', value: 'loc', },
        { label: 'Globale', value: 'gl', },
    ]
}>
<TabItem value="loc">

```bash
cd grsim
./bin/grsim
```

</TabItem>
<TabItem value="gl">

Dans le menu **Démarrer**, cherchez grSim.

</TabItem>
</Tabs>

## Test pipeline

Pour allumer chaque service via la commande `npm run *`, il faudra utiliser un terminal différent.

```bash
cd backend-node

# Terminal 1
cd network-gateway && npm run dev

# Terminal 2
cd game-data && npm run dev

# Terminal 3 
cd msb && npm run dev

# Terminal 4
cd bots-control && npm run dev

# Terminal 5
cd bots-gateway && npm run dev
```

Dans le terminal 3, lorsque le prompt `$mol` apparait à l'écran, effectuez la commande suivante :

> call "MSB.triangle" '{ "ids" : [1, 2, 3] }'

Un triangle se forme avec les robots alliés 1, 2 et 3.

## Test bots-gateway

```bash
# Aller dans bots-gateway
cd backend-node
cd bots-gateway

# Launch bots-gateway
npm run repl
```

Lorsqu'un prompt $mol apparait à l'écran, effectuez la commande suivante :

> call "bots-gateway.control" '{ "id" : 1, "yellow" : true, "velocity" : { "normal" : 0, "angular": 0.2, "tangent" : 0 }}'

Si le robot jaune avec l'id 1 tourne autour de lui-même dans le simulateur GrSim, vous avez réussi le premier test !