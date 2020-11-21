---
id: linux
title: Linux
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
L'ensemble de la pile logiciel a été testé sous les distributions _Linux_ suivantes : Manjaro et Ubuntu (20.04).  
Les autres distribution Linux sont utilisables, il faudra adapter les commandes à votre distribution.
:::

## GrSim

GrSim est le simulateur de la division SSL.

### Dépendances

Avant d'installer GrSim, il faut installer les dépendances suivantes :
- Boost development libraries 
- CMake
- g++
- Google Protobuf
- OpenGL
- Open Dynamics Engine (ODE)
- Qt5 Development Libraries

<Tabs
    defaultValue="ub"
    groupId="operating-systems"
    values={[
        { label: 'Ubuntu', value: 'ub', },
        { label: 'Manjaro', value: 'man', },
    ]
}>
<TabItem value="ub">

```bash
# CMake
sudo apt-get install -y apt-transport-https ca-certificates gnupg software-properties-common wget
wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/dev/null > /tmp/kitware-archive-latest.asc
sudo apt-key add /tmp/kitware-archive-latest.asc
sudo apt-add-repository 'deb https://apt.kitware.com/ubuntu/ bionic main'
sudo apt-get update
sudo apt install -y cmake

# Autres dépêndances
sudo apt install -y git build-essential curl protobuf-compiler libprotobuf-dev qt5-default libqt5opengl5-dev libgl1-mesa-dev libglu1-mesa-dev protobuf-compiler libode-dev libboost-dev
```

</TabItem>
<TabItem value="man">

```bash
sudo pacman -S cmake base-devel ode protobuf qt5 boost boost-libs curl
```

</TabItem>
</Tabs>

### Installation

```bash
git clone https://gitlab.namec.fr/ssl/software/external/grSim.git grSim
cd grSim
mkdir build && cd build 
cmake .. && make
sudo make install # optionnel : Permet d'installer globalement GRSim.
```
## Game Controller

TODO 
## Backend Node

### Dépendances

Les dépendances de la partie software sont :
- Node.JS >= 14.x
- NPM (Node Package Manager) >= 6.x

<Tabs
    defaultValue="ub"
    groupId="operating-systems"
    values={[
        { label: 'Ubuntu', value: 'ub', },
        { label: 'Manjaro', value: 'man', },
    ]
}>
<TabItem value="ub">

```bash
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
sudo apt-get install -y nodejs
```

</TabItem>
<TabItem value="man">

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
nvm install node # Install latest version without npm problems.
```

</TabItem>
</Tabs>

Pour vérifier votre installation de Node, vous pouvez regarder les versions de node et npm.
```bash
node -v  # version >= 14.x.x
npm -v # version >= 6.x.x
```

### Installation

```bash
# Cloner le dépot
git clone https://gitlab.namec.fr/ssl/software/backend-node/backend-node.git --recursive

# Installer les dépendances
cd backend-node
./install-dependencies.sh
```