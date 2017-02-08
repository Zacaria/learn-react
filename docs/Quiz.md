<style type="text/css">
    ul { list-style-type: upper-alpha; }
</style>
# ES6 Quiz

Je vous propose de vous évaluer en EcmaScript 6 avec ce questionnaire.
Les questions sont centrées sur les pratiques communément utilisée dans un environnement React

1. Sélectionnez les affirmations correctes :

  ```js
  test = 'false';
  if(test) {
      const one = 1;
      let two = 1;
      var three = 2;
  }
  console.log(test);
  console.log(one);
  console.log(two);
  console.log(three);
  ```

  * Le premier console.log écris `undefined` dans la console.
  * Le second console.log écris `undefined` dans la console.
  * Le troisième console.log écris `undefined` dans la console.
  * Le quatrième console.log écris `undefined` dans la console.


2. Concernant les déclarations de variables. Sélectionnez les affirmations correctes :

  * Le mot clé var n'existe plus.
  * Le mot clé const permet de définir une variable immutable.
  * Le mot clé let permet de définir une variable mutable.
  * Contrairement à `var`, `const` et `let sont block scoped.
  

3. A partir de ce code : `const { name, birth } = user;`. Sélectionnez les affirmations correctes :

  * Une erreur surviens à la compilation.
  * Une erreur surviens à l'execution.
  * Une nouvelle variable est créé.
  * Deux nouvelles variables sont créées.


4. Sélectionnez les propositions syntaxiquement correctes :

  * `const f = x => x * x`.
  * `const f = x,y => x * y`.
  * `const f = (x,y) => x * y`.
  * `const f = (x,y) => {x * y}`.
  * `const f = (x,y) => {return x * y}`.


5. En plus de raccourcir le code, quelle est l'autre utilité des arrow-functions ?

  * Elles permettent "l'auto-applying".
  * Elles permettent au contexte extérieur à une fonction, d'y être appliqué automatiquement.
  * On peut simuler une arrow function avec `myfunction.apply(this)`.
  * On peut simuler une arrow function avec `myfunction.bind(this)`.
  * On peut simuler une arrow function avec `myfunction.call(this)`.


6. A partir du code suivant, comment faire pour importer les variables de earth.js ?

  ```js   
  // earth.js
  export const EARTH_RADIUS = 6371;
  export const EARTH_VOLUME = (4/3) * Math.PI * Math.pow(EARTH_RADIUS, 3);
  export default {EARTH_RADIUS, EARTH_VOLUME};
  ```

  * `const earth = require('./earth');`.
  * `const earth = require('./earth').default;`.
  * `import earth from './earth';`.
  * `import * as earth from './earth';`.
  * `import {EARTH_VOLUME, EARTH_RADIUS} from './earth';`.


7. Qu'apporte l'API Promise en es6

  * Elle permet le multi-threading avec sa fonction `race`.
  * Elle permet d'ordonner les appels aved sa fonction `all`.
  * Elle permet de différer l'execution d'une fonction avec sa fonction `then`.
  * Elle permet de simplifier la gestion des erreurs avec sa fonction `catch`.
  * Elle permet de résoudre le problème du callback hell.


8. A partir du code suivant `const a = [1, 2, 3, 4, 5];`. Sélectionnez les affirmations correctes :

  * `const [b, c, ...d] = a;` permet d'extraire les deux premiers éléments dans `b` et `c`. Le reste ira dans `d`.
  * `const [b, c, ...d] = a;` ne fonctionne pas.
  * `const [...b, c, d] = a;` permet d'extraire les deux derniers éléments dans `c` et `d`. Le reste ira dans `b`.
  * `const [...b, c, d] = a;` ne fonctionne pas.
  * L'opérateur aux trois petits points des questions précédentes s'appelle le "spread operator".
  * L'opérateur aux trois petits points des questions précédentes s'appelle le "rest operator".


9. Si on execute ce code `printUser({name: 'Chuck'})`. Quelles définitions de printUser pourrait-on trouver ?

  * `function printUser(user) {}`.
  * `function printUser({user}) {}`.
  * `function printUser({...user}) {}`.
  * `function printUser({name, friendCount: 0}) {}`.
  * `function printUser({name, friendCount = 0}) {}`.


10. Quelles propositions sont correctes pour remplacer le commentaire dans le code suivant

  ```js    
  const latitude = 45;
  const longitude = 45;
  const position = {
      // INSERT HERE
  }
  ```

  * `latitude = latitude; longitude = longitude`.
  * `latitude: latitude, longitude: longitude`.
  * `latitude = latitude, longitude = longitude`.
  * `latitude, longitude`.


11. Parmi les propositions suivantes, lesquelles permettent d'executer ensuite : `const car = new Car();`:

  * `const Car = {};`.
  * `class Car = {};`.
  * `class Car {};`.
  * `const Car = () => {};`.


12. Quelle est l'utilité de la fonction `Object.assign` :

  * Elle permet de muter les propriétés d'un objet à partir d'un autre objet.
  * Elle permet de copier les propriétés d'un objet dans un autre objet.
  * Elle permet de créer un nouvel objet.
  * Elle permet de créer des "effets de bords".


13. Que se passe-t-il lorsque ce code est exécuté ?

  ```js 
  const user = {name: 'chuck'};

  user.name = 'bob';

  console.log(user.name);
  ```

  * Le programme affiche "chuck".
  * Le programme affiche "bob".
  * Une erreur surviens.
  * Rien ne se passe.


14. Que se passe-t-il lorsque ce code est exécuté ?

  ```js
  const user = {name: 'chuck'};

  user = {name: 'bob'};

  console.log(user.name);
  ```

  * Le programme affiche "chuck".
  * Le programme affiche "bob".
  * Une erreur surviens.
  * Rien ne se passe.


15. Sachant que toutes les variables sont définies. Quelle est la ligne la plus performante ?

  ```js 
  isEmpty ? [] : () => displayName();
  isEmpty ? emptyArray : displayName;
  ```

  * La première.
  * La deuxième.
  * Aucune, es6 fait automatiquement les optimisations.
  * Aucune, le JavaScript n'est pas performant.

---

Bravo vous êtes arrivés au bout ! J'espère que ça vous a plu :)
Maintenant voici les [réponses](./Quiz-answers.md)
