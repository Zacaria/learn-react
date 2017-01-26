# Learn react

Workshop server : [![Build Status](https://travis-ci.org/Zacaria/learn-react.svg?branch=master)](https://travis-ci.org/Zacaria/learn-react)
Workshop client : TBD

## Prequisites

- knowledge of JavaScript
- es6 helps a lot
- node version 6.9

## Purpose

> [React](https://facebook.github.io/react/) is javascript **library** for building User Interfaces
>
> -- Facebook

Since JQuery, web development has faced a lot of changes.

In 2010 Angular was released by Google.
It introduced a new way of dealing with front-end development, organizing complex User Interfaces through MVC / MVVM **architectures** using two-way data-binding.
And still today Angular 1.x is still one of the biggest front-end **framework**.

In 2013 React was released, mainly maintained by Facebook, Instagram and community.
As a library, React only handles the **view layer**. Focusing on **performance** and **scaling**, it features a virtual DOM and one-way data flow.
In order to make it more complete, facebook proposed to use it with [Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#.zayn2ojof) architecture.

In 2014, Google announced Angular2. The major changes it brings, would make the current version **incompatible** with Angular2.

This announce really shook the community. Developers began to seek for other solution. The **timing** was perfect for React to be the alternative.

This repo aims to help introducing React for developers.

## Topics

* Virtual DOM
* JSX
* Declarative
* Component Lifecycle
* Immutability : why ?
* One way data-flow
* Performance
* Tests : Enzyme / Jest
* Redux ?
* Dumb and smart components ?
* Others : Flux, Relay ?
* Learn once, write anywhere : React-native

## How to use

### Presentation

Run `npm run reveal`, opens a tab in the browser with a reveal. sourced by Presentation.md

# TODOS

- [x] Introduction
- [ ] Topics
- [ ] How to use
- [ ] Reveal [Presentation](Presentation.md)
- [ ] Examples
- [ ] [Workshop](docs/Workshop.md)
- [x] Sources

# Sources

## React

Official doc : https://facebook.github.io/react/

Main learning ref : 4 hours : https://developmentarc.gitbooks.io/react-indepth/content/

Useful articles (ordered):
- 5 min : http://buildwithreact.com/tutorial/jsx
- 5 min : https://medium.freecodecamp.com/react-aha-moments-4b92bd36cc4e#.m4r2w6czb
- 2 min : https://medium.com/@learnreact/container-components-c0e67432e005#.m5ln3mykh
- 5 min : https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.gv3g9xvuu
- 7 min : https://medium.com/javascript-scene/jsx-looks-like-an-abomination-1c1ec351a918#.xtw93rso7
- 4 min : https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.7ngk35ww6
- 9 min : https://medium.com/@tylermcginnis/react-interview-questions-c8a319ed02bd#.v8meuozg9
- 10 min : https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3#.9nb1uifs5

Videos :
- 66 min : https://egghead.io/courses/react-fundamentals

Awesome list : https://github.com/enaqx/awesome-react

## Redux (harder but valuable !)

Main learning ref : 10 hours : http://redux.js.org/

Useful articles :

- 11 min : https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6

Videos :
- lvl 1 : 121 min : https://egghead.io/courses/getting-started-with-redux
- lvl 2 : 137 min : https://egghead.io/courses/building-react-applications-with-idiomatic-redux

Awesome list : https://github.com/brillout/awesome-redux
