<img src="assets/imgs/react-logo.png" width="500px">

---

## Definition

1st release : March 2013

> React is a library for providing a view for data rendered as HTML.

[![npm](https://img.shields.io/npm/dm/react.svg)](https://www.npmjs.org/package/react)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/facebook/react.svg)](https://github.com/facebook/react/pulls)
[![GitHub release](https://img.shields.io/github/release/facebook/react.svg)](https://github.com/facebook/react)
[![GitHub stars](https://img.shields.io/github/stars/facebook/react.svg?style=social&label=Star)](https://github.com/facebook/react)

---


## Why ?

* Simplicity
* Predictability
* Structure
* Reusability
* Testability

---

## How ?

* Components
* Virtual DOM
* JSX
* Unidirectional data flow
* Components API & lifecycle
* Containers & presentational component


---

## Components

```
// Stateless
const Presentational = (props) => {
    const {value} = props;
    return <div className="title">My value is {value}</div>
}

// Statefull
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }
    render() {
        return <Presentational value={this.state.value}/>
    }
}

```

Use Composition instead of inheritance !

---

## State vs Props ?

> Props are to components what arguments are to functions.

> Like props, state alters component rendering. However it is private and fully controlled by the component.

---

## Virtual DOM

Rendering is one of the heaviest operation

<img src="./assets/imgs/virtual_dom_diff.png" width="650px">

---

## JSX

Language allying JS and XML !

Why ?

```
// Clean
<div className="red">
    Hello
</div>;

//Duh
React.createElement('div', { className: 'red' }, 'Hello');
```

----


```
// Clean
<DashboardUnit data-index="2">
  <h1>Scores</h1>
  <Scoreboard className="results" scores={gameScores} />
</DashboardUnit>;

//Duh Duh
React.createElement(
  DashboardUnit,
  { 'data-index': '2' },
  React.createElement('h1', null, 'Scores'),
  React.createElement(Scoreboard, {
    className: 'results', scores: gameScores
  })
);
```

----

## Exercise

<a class="jsbin-embed" href="http://jsbin.com/qucecahako/1/embed?html,js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.40.3"></script>

---

## Unidirectional data flow

Data is passed by props children component

---

## Components API & lifecycle

* render
* setState
* es6 class constructor
* componentWillMount
* componentDidMount
* shouldComponentUpdate...


----

<img src="https://cdn-images-1.medium.com/max/1600/0*VoYsN6eq7I_wjVV5.png" width="650px">

---

## Container & presentational component

Also called "smart" and "dumb" components

* Container :
 * Renders other components
 * Holds logic, lifecycle hooks
* Presentational :
 * Renders html, holds styles
 * Stateless, knows nothing but given props

---

## One way data-binding

```
// GET STATE
const foo = this.state.foo;

// SET STATE

// impossible
this.state = {foo:'bar'};

// Ok
this.setState({foo:'bar'});
```

---

## what we've seen

Recap

---

## Lifecycle Hands on

<p data-height="265" data-theme-id="0" data-slug-hash="ZLGYrp" data-default-tab="result" data-user="Muvaiah" data-embed-version="2" data-pen-title="React-lifecycle" class="codepen">See the Pen <a href="http://codepen.io/Muvaiah/pen/ZLGYrp/">React-lifecycle</a> by Zacaria (<a href="http://codepen.io/Muvaiah">@Muvaiah</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

jsbin with filter
<a class="jsbin-embed" href="http://jsbin.com/beyehifeta/8/embed?live">JS Bin demo</a><script src="http://static.jsbin.com/js/embed.js"></script>

---

## What ?

* Express state
* Declarative
* Auto-update of changed parts
* Components Composition
* Performance
* Ecosystem

add image of layout broken organisation

---

## Tools

<img src="assets/imgs/babel-logo.png" width="300px">
<img src="assets/imgs/redux-logo.png" width="150px">
<img src="assets/imgs/jest-logo.png" width="123px">
<img src="assets/imgs/npm-logo.png" width="345px">

---

## Hello world

<a class="jsbin-embed" href="http://jsbin.com/nucerif/2/edit?js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.40.2"></script>


---

## Thinking in React
https://facebook.github.io/react/docs/thinking-in-react.html


---

## How to make routes

react-router example

---

## Redux

<iframe width="560" height="315" src="https://www.youtube.com/embed/QEjf1W-rRIo" frameborder="0" allowfullscreen></iframe>

----

## File structure
    .
    └── src
        ├── actions
        ├── components // dumbs
        ├── containers // smarts
        ├── reducers
        └── store

---

## React-native

[![npm](https://img.shields.io/npm/dm/react-native.svg)](https://www.npmjs.org/package/react-native)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/facebook/react-native.svg)](https://github.com/facebook/react-native/pulls)
[![GitHub release](https://img.shields.io/github/release/facebook/react-native.svg)](https://github.com/facebook/react-native)
[![GitHub stars](https://img.shields.io/github/stars/facebook/react-native.svg?style=social&label=Star)](https://github.com/facebook/react-native)

----

## File structure
    .
    ├── android
    ├── ios
    ├── index.android.js
    ├── index.ios.js
    └── src
        ├── actions    // reusable
        ├── components // specific
        ├── containers // reusable
        ├── reducers   // reusable
        └── store      // reusable