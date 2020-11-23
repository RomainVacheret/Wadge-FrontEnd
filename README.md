# Wadge-FrontEnd

[![Build Status](https://img.shields.io/travis/com/RomainVacheret/Wadge-FrontEnd/master)](https://travis-ci.com/github/RomainVacheret/Wadge-FrontEnd)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/RomainVacheret/Wadge-FrontEnd)
[![License](https://img.shields.io/github/license/RomainVacheret/Wadge-FrontEnd.svg?style=flat-square)](LICENSE)
[![Code Quality](https://sonarcloud.io/api/project_badges/measure?project=RomainVacheret_Wadge-FrontEnd&metric=alert_status)](https://sonarcloud.io/dashboard?id=RomainVacheret_Wadge-FrontEnd)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=RomainVacheret_Wadge-FrontEnd&metric=sqale_index)](https://sonarcloud.io/dashboard?id=RomainVacheret_Wadge-FrontEnd)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=RomainVacheret_Wadge-FrontEnd&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=RomainVacheret_Wadge-FrontEnd)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=RomainVacheret_Wadge-FrontEnd&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=RomainVacheret_Wadge-FrontEnd)
[![Coverage Status](https://coveralls.io/repos/github/RomainVacheret/Wadge-FrontEnd/badge.svg?branch=master)](https://coveralls.io/github/RomainVacheret/Wadge-FrontEnd?branch=master)

# Que faisons nous ?
Une application proposant des recettes de cuisine à partir de fruits et légumes de saison tout en prennant en compte ce que vous possédez déjà dans votre frigo !

# Installation
## Prérequis

* [Télécharger NodeJs](https://nodejs.org/en/download/)
* [Télécharger Git](https://git-scm.com/downloads)
* [Créer une clef Google API](https://developers.google.com/maps/documentation/javascript/get-api-key)

Clonez le repository  
Créez un fichier .env à la racine du projet  
Ajoutez la ligne `REACT_APP_GOOGLE_API="VOTRE_CLEF_API"`  
Lancez le projet  
L'application sera visible à l'adresse [http://localhost:3000](http://localhost:3000). <br>
Vous devez lancer la partie back end en parallèle pour que l'application fonctionne correctement.
```Bash
git clone git@github.com:RomainVacheret/Wadge-FrontEnd.git
cd Wadge-FrontEnd
touch .env
npm install
npm start
```
###### Note : La clef Google API n'est pas obligatoire pour faire fonctionner l'application. Seulement les parties impliquées.

# Un projet découpé en deux parties
Ce repository contient la partie front end de notre application web. Vous trouverez le back end à [cette adresse](https://github.com/RomainVacheret/Wadge-BackEnd).
# Auteurs
* **Fanny Lourioux** - [Github](https://github.com/FannyLourioux) - [LinkedIn](https://www.linkedin.com/in/fanny-lourioux-4744941a0/)
* **Trystan Roches** - [Github](https://github.com/Trystan4) - [LinkedIn](https://www.linkedin.com/in/trystan-roches-4a6ba0171/)
* **Romain Vacheret** - [Github](https://github.com/RomainVacheret) - [LinkedIn](https://www.linkedin.com/in/romain-vacheret-b58270189/)
* **Maodo Laba Sow** - [Github](https://github.com/sowJamndg) - [LinkedIn](https://www.linkedin.com/in/maodo-laba-sow-668244184/)

## Plus d'informations
Retrouvez notre [page de présentation](https://romainvacheret.github.io/Wadge-FrontEnd/)
