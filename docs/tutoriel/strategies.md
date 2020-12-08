---
id: tuto_strategies
title: Faire une stratégie
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Procédures

1. Dans le dossier `src/controllers/strategies` du service MSB, dupliquer le fichier `template.ts` et renommer le avec le nom de votre stratégie.

2. Renommer la classe. N'oubliez pas de modifier l'initialisation dans la fonction `handler` de la déclaration.

3. Modifier la fonction compute en fonction de vos besoins.

4. Enregistrer la stratégie dans le fichier `index.ts` du dossier.

## Exemple

### Commande en vitesse du robot.

```typescript title="/src/controllers/strategies/turn.ts"

import { ActionSchema, Context, ServiceBroker } from 'moleculer'
import { Control } from '@ssl/types/internal/control/'
import Strategies from '@ssl/types/internal/task-manager/tasks/strategies'

import { state } from '../../models/GameState'

export default class Turn extends Strategies {
  name = 'turn';

  public constructor(public id: number) {
    super()
  }

  public static declaration: ActionSchema = {
    params: {
      id: {
        type: 'number', min: 0, max: 15,
      },
    },
    handler(ctx: Context<{ id: number }>): void {
      state.assign.register([ctx.params.id], new Turn(ctx.params.id))
    },
  }

  compute(broker: ServiceBroker): boolean {
    // const robot = state.data.robots.allies[this.id]

    void broker.call('bots-gateway.control', {
      id: this.id,
      yellow: true,
      velocity:
      {
        normal: 0,
        angular: 0.2,
        tangent: 0,
      },
    } as Control)

    return false
  }
}
```

```typescript title="/src/controllers/strategies/index.ts"
// Autre importation de fichiers ici
import Turn from './turn'

export default {
  // Autre code ici
  turn : Turn.declarations,
}
```