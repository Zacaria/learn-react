# TechNight

<img src="assets/imgs/react-logo.png" height="100px">

---

## Sommaire

* Introduction
* Test es6 JS
* jQuery / Angular / React
* A quoi ça sert ?
* Outils pour devenir pro-actif
* Comment apprendre

---

## Introduction

1st release : March 2013

> React is a library for providing a view for data rendered as HTML.

[![npm](https://img.shields.io/npm/dm/react.svg)](https://www.npmjs.org/package/react)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/facebook/react.svg)](https://github.com/facebook/react/pulls)
[![GitHub release](https://img.shields.io/github/release/facebook/react.svg)](https://github.com/facebook/react)
[![GitHub stars](https://img.shields.io/github/stars/facebook/react.svg?style=social&label=Star)](https://github.com/facebook/react)

---

## Pourquoi ?

* Simplicité
* Predictabilité
* Composants
* Testabilité

---

## Nouveautés

* React-native
* Time travel debugging
* Server Rendering

---

## Test es6

Comment ça s'est passé ?

----

## Destructuring

Déstructurer permet de créer des variables en utilisant la structure de tableaux ou d'objets.

```JavaScript
// list matching
var [a, , b] = [1,2,3];

// object matching
var { op: a, lhs: { op: b }, rhs: c }
       = getASTNode()

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var {op, lhs, rhs} = getASTNode()

// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}
g({name: 5})

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;
``` 

----

## Modules

Support des modules au niveau du langage.

⚠ Non supporté par Node 7

```JavaScript
// lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;
```
```JavaScript
// app.js
import * as math from "lib/math";
alert("2π = " + math.sum(math.pi, math.pi));
```
```JavaScript
// otherApp.js
import {sum, pi} from "lib/math";
alert("2π = " + sum(pi, pi));
```

----

## Default - Rest - Spread Operator

```JavaScript
function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f(3) == 15
```
```JavaScript
function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6
```
```JavaScript
function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6
```

---

Outils

<img src="assets/imgs/joshua-earle-117661.jpg">

----

[<img src="assets/imgs/npm-logo.png" height="100px">](https://www.npmjs.com)
[<img src="assets/imgs/babel-logo.png" height="100px">](https://babeljs.io)
[<img src="assets/imgs/webpack-logo.png" height="100px">](https://webpack.js.org)
[<img src="assets/imgs/eslint.png" height="100px">](http://eslint.org)
[<img src="assets/imgs/mocha.svg" height="100px">](https://mochajs.org)
[<img src="assets/imgs/karma.png" height="100px">](https://karma-runner.github.io/1.0/index.html)

JS fatigue is for the better 👌

----

How to 

---

## Outils React

Enzyme

---


Live code : Bootstrap
Réutiliser de composants

[ ] Fil conducteur 

Je présente mon expérience en React
Introduction à React
Avec angular 2, les gens se posent des questions
comparaisons
Qui a choisi React
Pourquoi ? (slide pourquoi et nouveautés)
Déjà on a parlé de React, mais pas du JS
Retour sur le test
es6 pas homogène sur les plateformes
=> babel et autres outils
Le JS dispose d'outils pour structurer
Le JS dispose de bonnes pratiques et de nombreux standards
  <img src="assets/imgs/standards.png">

Maintenant je vais vous montrer la bête
Lib d'interface utilisateur
VirtualDOM
JSX
Composants
Cycle de vie
Exercice du Compteur avec tests
Comment est-ce qu'on fait quelque chose de React ?
On utilise un state manager


Pour les exercices, faire intervenir tout le monde
  ex : chacun à la suite d'un coin à l'autre de la salle
  
  
redux fatigue : https://twitter.com/dan_abramov/status/704652537635409921


[ ] Comparatif React vs Angular vs JSP/Jquery Tableau comparatif
[ ]     exemple : mirakl migre thymeleaf
[ ] Que puis-je faire avec React ?
[ ]     D'abord, je donne les réalisations populaires
[ ]     Ensuite, les nouvelles possiblités technique
[ ] Comment faire du JS propre et structuré ? Donner les outils et bonnes pratiques
[ ]     Airbnb
[ ]     Github
[ ] Quels sont les outils pour être pro-actif ?
[ ]     Les outils JS classiques : babel, webpack
[ ]     Les outils particuliers : Enzyme, Jest
[ ]     Les concepts/architectures : Redux, Immutable
[ ] Comment apprendre React
[ ]     Concepts clés : Redux & immutable
[ ]     Je donne des ressources
[ ]     Et un exercice : Que je n'ai pas encore !
