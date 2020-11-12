> Vérifier que vous recevez bien les donnés de GrSim en lançant à la fois GrSim et le network-gateway avec un logging au niveau debug. Si la ligne _Emit 'network-gateway.updateVision' event._ apparaît plusieurs fois à la secondes sur la console, après le lancement du noeud, vous recevez bien les informations de GrSim. Si cela ne marche pas, la variable **HOST_ADDRESS** doit être mises avec votre addresse ip privée de la forme _192.168.*.*_ en lieu et place de celle par défaut. Si vous avez un soucis, n'hésitez pas à contacter l'équipe qui vous aidera avec plaisir. 



# Cours 1.1 - Installation 
# Cours 1.2 - Faire bouger un premier robot avec un ordre envoyé.
- Explication de comment faire
- Explication de la commande.
# Cours 2.1 - Actions MoveTo
- Explication de comment faire
- Explication de la commande
# Cours 2.2 - Actions MoveBy
- Explication de comment faire
- Explication de la commande


#### Configuration des variables d'environnement

Chaque dossier contient un fichier `.env` où vous pouvez changer le degré du logging que vous allez voir dans la console en mettant la variable d'environnement **LOGLEVEL** à _info_, _warn_ ou _debug_.

##### Network-Gateway

La variable d'environnement, **YELLOW** permet d'indiquer à tout le programme la couleur de notre équipe (si vous voulez contrôler les robots bleus, mettez à false, sinon laissez à true).

##### Bots Gateway

La variable d'environnement, **SIMULATION** permet d'indiquer si l'ordre doit être envoyé à un robot physique ou un robot sous GrSim.

call "MSB.shoot" '{ "id" : 0 }'

call "bots-control.stop" '{ "id" : 0 }'