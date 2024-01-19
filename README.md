# Pokedex App Readme (en français)

## Aperçu
Ce dépôt contient le code source d'une application Pokedex simple construite avec Apache Cordova et Vue.js. L'application Pokedex permet aux utilisateurs de visualiser une liste de Pokémon, de sélectionner un Pokémon spécifique pour voir ses détails, et de jouer un son d'attaque associé au Pokémon sélectionné.

## Fonctionnalités
- Liste de Pokémon avec des informations de base.
- Vue détaillée pour chaque Pokémon sélectionné, comprenant le nom, l'image et les statistiques de base.
- Possibilité de charger davantage de Pokémon par lots.
- Lecture d'un son d'attaque pour le Pokémon sélectionné.

## Prérequis
Avant d'exécuter l'application Pokedex, assurez-vous d'avoir installé les éléments suivants :
- [Node.js](https://nodejs.org/)
- [Apache Cordova](https://cordova.apache.org/)
- [Vue.js](https://vuejs.org/)

## Mise en route
1. Clonez ce dépôt sur votre machine locale.
   ```bash
   git clone [url_du_dépôt]
   ```

2. Accédez au répertoire du projet.
   ```bash
   cd [répertoire_du_projet]
   ```

3. Installez les dépendances requises.
   ```bash
   npm install
   ```

4. Ajoutez les plates-formes pour lesquelles vous souhaitez exécuter l'application. Par exemple, pour ajouter Android :
   ```bash
   cordova platform add android
   ```

5. Construisez le projet Cordova.
   ```bash
   cordova build
   ```

6. Exécutez l'application sur un appareil connecté ou un émulateur.
   ```bash
   cordova run android
   ```

## Structure de l'application
- **index.html**: Le fichier HTML principal contenant la structure de l'application.
- **css/index.css**: Feuille de style pour l'application.
- **js/index.js**: Fichier JavaScript principal gérant la logique de l'application.
- **js/Vue.js**: Bibliothèque Vue.js pour la construction d'interfaces utilisateur.
- **cordova.js**: Fichier JavaScript Cordova pour la gestion des fonctionnalités spécifiques à l'appareil.

## Personnalisation
- Personnalisez l'apparence de l'application en modifiant les styles dans `css/index.css`.
- Ajustez les données et le comportement des Pokémon dans `js/index.js`.
- Ajoutez ou modifiez les composants Vue.js dans le fichier HTML pour des structures d'interface utilisateur plus complexes.

## Contribution
N'hésitez pas à contribuer au développement de cette application Pokedex. Fork the repository, effectuez vos modifications, puis soumettez une pull request.

## Licence
Cette application Pokedex est sous licence [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

## Remerciements
- Merci à la Fondation Apache Software pour Apache Cordova.
- Vue.js pour fournir un framework JavaScript flexible et efficace.

Pour plus d'informations sur Apache Cordova, consultez la [documentation officielle](https://cordova.apache.org/docs/en/latest/).
