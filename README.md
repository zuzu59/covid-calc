# covid-calc
Calculateur de risque de contamination lors d'un repas<br>
zf2011120.1518

## Buts
Permet de calculer la probabilité de se retrouver avec une personne malade du COVID-19 lors d'un repas avec des personnes venant de différentes régions de Suisse.

Grâce l'initiative d'Open DATA, pleins de données sont en libre accès maintenant. Le but de ce document est de faire un petit calculateur dans une page WEB sans serveur WEB grâce au javascript embarqué des browsers. Nous avons dans chaque browser, y compris ceux des smartphones, un moteur javascript très efficace qu'il suffit de dompter. 

Nous allons programmer en Javascript ainsi que de l'HTML/CSS

Nous allons voir qu'il existe une grande quantité de librairies javascript à embarquer directement dans le browser.

Nous allons aussi utiliser le puissant inspecteur du browser pour dépanner en temps réel de notre page WEB.

Et finalement aussi utiliser un environnement de développement de type bac à sable (repl.it) pour tout le développement de l'application.

Après nous n'allons plus approcher de la même manière le développement d'application WEB.


## Problématiques
En gros et schématiquement il y a les *backends* et les *frontends* !

Y'a pas longtemps les applications dynamiques WEB s'appuyaient sur une serveur backend dynamique (serveur WEB et SGBD), les données étaient mise en pages uniquement sur le backend au moyen d'un framework. 

Puis sont arrivés les frontends, où la mise en page se faisait directement dans le browser du client, mais il faut encore un backend dynamique dédié pour fournir les données dynamiques, à gérer, maintenir et surtout à alimenter en énergie pour distribuer les applications WEB.

Actuellement, grâce à l'Open DATA et les API/rest, il suffit juste d'un serveur backend statique, sur un serveur de pages WEB statique déjà existant, ou tout simplement un fichier sur un disque ou clef USB, pour distribuer une application WEB dynamique. Tout la partie dynamique se fera alors dans le frontend du browser !

C'est donc un nouveau métier à apprendre et surtout découvrir tout son immense potentiel.


## Moyens
Comme exercice dans ce document et comme c'est à la mode, nous allons calculer la probabilité de se retrouver avec une personne malade du COVID-19 lors d'un repas avec des personnes venant de différentes régions de Suisse.

Nous allons aussi travailler avec un environnement de développement de type bac à sable (repl.it) pour tout le développement de l'application, afin de pouvoir travailler tous en même temps via vidéo conférence.

Bien entendu selon les bonnes pratiques de partage de code sur Github (Issues, Pull requests, et tableau Kanban)


## Environnement de développement
Il est très pratique d'utiliser l'environnement de développement en ligne *https://repl.it/* pour développer très simplement ce petit projet.

1. se connecter avec son *compte* Github sur *https://repl.it/*
1. créer un nouveau projet sur rep.it en utilisant ce dépôt github: **https://github.com/zuzu59/covid-calc**
1. cliquer sur le bouton **run**


## Installation
Il n'y en n'a pas vu que tout se passe en *frontend* dans son *browser*


## Utilisation
Juste cliquer sur ceci:
https://zuzu59.github.io/covid-calc/index.html


## Juste pour faire joujou

Si on veut juste *toucher* pour faire joujou on peut cliquer, **dans une fenêtre de navigation privée**, sur ceci:
https://covid-calc.zuzu59.repl.co

Puis de cliquer sur le bouton *fork*, cela démarre un *bac à sable* pour faire joujou
