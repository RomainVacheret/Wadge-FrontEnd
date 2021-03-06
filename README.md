# Wadge-FrontEnd

[![Build Status](https://img.shields.io/travis/com/RomainVacheret/Wadge-FrontEnd/master)](https://travis-ci.com/github/RomainVacheret/Wadge-FrontEnd)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/RomainVacheret/Wadge-FrontEnd)
[![License](https://img.shields.io/github/license/RomainVacheret/Wadge-FrontEnd.svg?style=flat-square)](LICENSE)
[![Code Quality](https://sonarcloud.io/api/project_badges/measure?project=RomainVacheret_Wadge-FrontEnd&metric=alert_status)](https://sonarcloud.io/dashboard?id=RomainVacheret_Wadge-FrontEnd)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=RomainVacheret_Wadge-FrontEnd&metric=sqale_index)](https://sonarcloud.io/dashboard?id=RomainVacheret_Wadge-FrontEnd)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=RomainVacheret_Wadge-FrontEnd&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=RomainVacheret_Wadge-FrontEnd)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=RomainVacheret_Wadge-FrontEnd&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=RomainVacheret_Wadge-FrontEnd)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

# Que faisons nous ?
Une application proposant des recettes de cuisine à partir de fruits et légumes de saison tout en prennant en compte ce que vous possédez déjà dans votre frigo !

# Installation
## Prérequis

* [Télécharger NodeJs](https://nodejs.org/en/download/)
* [Télécharger Git](https://git-scm.com/downloads)

Clonez le repository  
Lancez le projet  
L'application sera visible à l'adresse [http://localhost:3000](http://localhost:3000). <br>
Vous devez lancer la partie back end en parallèle pour que l'application fonctionne correctement.
```Bash
git clone https://github.com/RomainVacheret/Wadge-FrontEnd.git
cd Wadge-FrontEnd
npm install
npm start
```

# Un projet découpé en deux parties
Ce repository contient la partie front end de notre application web. Vous trouverez le back end à [cette adresse](https://github.com/RomainVacheret/Wadge-BackEnd).
# Auteurs
* **Fanny Lourioux** - [Github](https://github.com/FannyLourioux) - [LinkedIn](https://www.linkedin.com/in/fanny-lourioux-4744941a0/)
* **Trystan Roches** - [Github](https://github.com/Trystan4) - [LinkedIn](https://www.linkedin.com/in/trystan-roches-4a6ba0171/)
* **Romain Vacheret** - [Github](https://github.com/RomainVacheret) - [LinkedIn](https://www.linkedin.com/in/romain-vacheret-b58270189/)
* **Maodo Laba Sow** - [Github](https://github.com/sowJamndg) - [LinkedIn](https://www.linkedin.com/in/maodo-laba-sow-668244184/)

# Tests
Nos tests d'intégrations sont fait avec [cypress](https://www.cypress.io/).
La commande `npx cypress run` vous donne le résutlat dans votre terminal.
Si vous le préférez, utilisez la commande `npx cypress open` pour avoir accès à l'interface graphique.
###### Note : Pour que ces tests fonctionnent, vous devez avoir lancé le front end et le [back end](https://github.com/RomainVacheret/Wadge-BackEnd) au préalable.
## Plus d'informations
Retrouvez notre [page de présentation](https://romainvacheret.github.io/Wadge-FrontEnd/)
