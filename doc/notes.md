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

- Méthode abrégée dans un objET

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
