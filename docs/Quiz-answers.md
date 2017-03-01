1. B, C : 

Sans mot clé la variable est globale. 
Le mot clé `var` est function-scoped donc test et three ne sont pas undefined.
`let` et `const` sont block-scoped. Par conséquent ils ne sont pas définisà l'extérieur du `if`.

2. C, D

`const` ne définit pas une variable immutable. 
`const` permet seulement de controler le fait qu'on ne réassigne pas une variable.

3. D

C'est une démonstration de la fonctionnalité de destructuring.
Tout se passe bien, deux variables sont crées.

4. A, C, D, E

Cela ressemble beaucoup aux lambdas de java.
Les parenthèses sont obligatoires lorsqu'on a plus d'un paramètre.
Attention la réponse D ne renvoie rien !

5. B, D

L'auto-applying n'existe pas, c'est l'auto-binding.
Pour cela il faut utiliser `bind(this)`.
`apply` et `call` réalisent aussi l'auto-binding mais executent la fonction dans la foulée.

6. A, B, C, D, E

La première réponse est celle qui était utilisée en es5 avec `module.exports`.
La deuxième réponse est une fonction de compatibilité. Les `exports default` sont retrouvables dans `.default` du require.
La troisième réponse importe l'export par défaut en lui donnant un nom arbitraire.
La quatrième réponse import tous les exports uniques et les rassemble dans un objet nommé arbitrairement.
La cinquième réponse récupère un par un les exports uniques.

7. C, D, E

La fonction `race` permet de terminer un ensemble de promise lorsque l'une d'elles aboutit.
La fonction `all` n'est pas ordonnée, elle prend en paramètre un tableau de promesses.

8. A, D, E

Ici c'est une question de syntaxe. Le rest operator ne peut être utilisé qu'en dernière position.
Il est similaire au spred operator, mais ce dernier n'a pas la même approche.
Le spread permet d'étaler un itérable comme un objet ou tableau.
Le rest permet de récupérer une partie d'un itérable.

9. A, C, E

La réponse B, tente de déstructurer l'objet passé en paramètre. Seulement l'objet n'a aucune clé du nom de "user".
La réponse C utilise le rest operator pour récupérer toutes les propriétés passées en paramètre, et les mettre dans une variable `user`.
La réponsee D est de erreur de syntaxe.
La réponse E montre que l'on peut utiliser des paramètres par défaut même lors de la déstructuration d'un paramètre.

10. B, D

Les réponses A et C sont des erreurs de syntaxe avec le point virgule et le signe égal.
La réponse D présente l'utilisation du "shorthand property definition". Lorsque le nom de la clé et de la variable sont égales, alors on peut omettre la variable

11. C, D

La réponse A crée un objet littéral qui n'est pas instantiable.
La réponse B est une erreur de syntaxe.

12. B, C

La fonction permet de copier les propriétés d'un objet dans un autre.
En copiant dans objet vide `Object.assign` permet de simuler l'immutabilité en renvoyant un objet tout frais.

13. B

Bien que `const` soit utilisé, on ne réassigne pas la variable.
Donc tout se passe bien, la variable est correctement mutée. 

14. C

`const` empêche la réassignation de variables. 
Le programme va produire une erreur et s'arrêter.

15. B

`[]` équivaut à `new Array()` et `() => {}`équivaut à créer une nouvelle fonction auto-bindée.
C'est pourquoi la deuxième ligne est plus performante.
Avec des problématiques de performances, il vaut mieux éviter les raccourcis instanciant de nouveux objets.
Dans la ligne 2 `emptyArray` contiendrait `new Array()`.
Et displayName serait bindé en dehors de la fonction aux besoins de perfs. De cette manière : `displayName.bind(this)`.

Enfin, il est important de comprendre que l'es6 est une spécification. il
