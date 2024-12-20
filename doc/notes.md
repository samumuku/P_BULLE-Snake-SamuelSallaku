### Samuel Sallaku

# 08.11.2024

## Introduction du projet

#### Ce que j'ai appris

- On peut utiliser un fichier de notes pour toute la classe
- Nommage du commit exemple : feat(snake):Répondre à une touche, écoute(kickoff): Ajouter notes
- Exemple description : [45] [Done]
- Question à se poser pour nommer un commit : "Qu'est ce que j'ai fait pour arriver au résultat?" donc, quoi(sur quoi): qu'est ce qui est fait
- Description des commits (Journal de travail) : [temps] [WIP ou bien DONE]
- La structure du repo GitHub, dossiers et fichiers en miniscule

## Introduction JavaScript

[Lien JS](https://fr.javascript.info)

- Appris les différentes manières de déclaration de variables : let & var
- alert pour afficher du texte
- avoir la type d'une variable = typeof (variable)
- conversions, syntaxe = typeConversion(variable)
- '+' sur une variable la convertit en numero
- '?' permet d'avoir une valeur qui dépend de plusieurs conditions
- '!!' permet de convertir en boolean(lors d'une utilisation de NOT)
- au lieu d'écrire return n, on peut faire var fonction = (param1,param2) '=>' a + b
- constructeur d'objet : "let user = new Object(); // syntaxe "constructeur d'objet"
  - "let user = {}; // syntaxe "littéral objet"
  - effacer une propriété avec delete : delete user.age
  - propriété doit se terminer avec une virgule pour chaque ligne
- pour les propriétés multi-mots , la syntaxe pour changer la valeur est : user["likes birds"] = true;
- différentes manières de changer la valeur des propriétés d'un objet
- test d'existence utilisant 'in' exemple: alert("samuel" in name);
- boucle for.. in, les clés sont les "name", "age", "isAdmin" dans un objet par exemple
  - si on fait un alert(user[clé]); dans le for.. in, alors cela va afficher les valeurs dans l'ordre
  - mais les propriétés non-entiers, sont listés dans l'ordre de créations
  - dont il suffit d' ajouter un '+' devant le "clé" quand on utilise la boucle for.. in

### Arrêt à [Dernière page](https://fr.javascript.info/object-copy)

## Ce que je pense faire la semaine prochaine

- Je pense continuer à apprendre sur le site, en approfondir les connaissances acquises aujourd'hui

# 15.11.2024

## Installation Node JS

- Explications du prof par rapport au fichiers de base de projet Snake
- Installation et commandes pour Node JS
- npm i, puis npm run dev
- Différents fichiers sur le repo(gitignore pour les fichiers à ignorer, packages, vite.config.js, etc.)

## Ce que j'ai appris

- Méthode abrégée dans un objet

```javascript
user = {
  sayHi() {
    // identique à "sayHi: function(){...}"
    alert("Hello");
  },
};
```

- utiliser .this pour accéder à l'objet voulu
- types Symbole (unique)
- Utilisation du canvas, puis les méthodes pour créer des rectangles (.strokeRect, .fillRect, .fill(), etc.)

# 22.11.2024

## Administratifs

- Explications par rapport au .config.js
- Génération de token
- Journal de travail
- Points JSP
- Daily Scrum -> fixer des buts(petits buts)

## Ce que je pense faire

- Je pense faire bouger le snake, qu'il aie dans une direction quand les touches flèches sont tapées
- Faire en sorte que la nourriture disparait après que le snake l'ait touché puis refaire apparaître un nouveau

## Ce que j'ai appris

- Nouvelle manière d'écrire dans la description des commits :
  - [duree] [statut] [correction(date)]
- Utilisation du deboggeur, "debugger" au moment où on veut que le programme s'arrête.
- Ne pas mettre des valeurs au hasard dans les méthodes , comme par exemple la position x ou y du snake
- Modèle et Vue lors du développement d'un jeu, 2 choses différentes
- Pour le snake, il faut faire un tableau avec les objets(corps du snake) qui vont donc s'ajouter chaque fois une pomme est mangée.

# 29.11.2024

- Absent

# 06.12.2024

- Présent mais, préparation des PO donc pas pu avancer

# 13.12.2024

- Absent

# 20.12.2024

## Ce que j'ai fais

- J'ai réussi à faire placer la pomme dans des box de 20 pixels au hasard
- J'ai réussi à faire en sorte que le snake puisse manger la pomme, et qu'elle disparaisse et reapparaisse quelque part d'autre
- J'ai réussi à différencier le corps avec la tête, en ajoutant de différentes couleurs
- J'ai réussi à faire les collisions entre le snake et son corps, puis les murs du jeu
