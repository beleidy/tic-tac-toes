[![Build Status](https://travis-ci.org/beleidy/redux-tac-toe.svg?branch=master)](https://travis-ci.org/beleidy/redux-tac-toe)

# ReduxTacToe

## How to play
Once you have your server running (see below for instructions), you get multiple tic-tac-tie boards.
Each board plays independently, with X and O taking turns. Once a player has won, the board will change
colour and indicate the winner.

### Removing Boards
Each board has an X icon in the top right corner. Clicking on this icon will remove the board from the page.
Once a board has been removed, you will not be able to bring it back and the game will be lost.

### Clearing all boards
If you want to start over, just click on Clear All Boards. This will reset all the boards.

### Add Board
If you would like more boards on your page, click Add Board. This will add one board to the end of the page.
For multiple boards, click add board as many times as you need.

## Why build this?
I built this project as my first react app using redux.


This project was started from
## React and Redux, Webpack 2 boilerplate
Please note that I have uninstalled some dependencies, and installed react-redux-router
I have also made some changes to the webpack configuration file, mainly to use css instead of scss

## Setup

Tested with node 6.x and 7.x

```
$ npm install
```

## Running in dev mode

```
$ npm start
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.

![Running in the iTerm2](http://i.imgur.com/IxamMBh.png)

It is using [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard), so please note the following:

**OS X Terminal.app users:** Make sure that **View → Allow Mouse Reporting** is enabled, otherwise scrolling through logs and modules won't work. If your version of Terminal.app doesn't have this feature, you may want to check out an alternative such as [iTerm2](https://www.iterm2.com/).

## Build (production)

Build will be placed in the `build` folder.

```
$ npm run build
```

If your app is not running on the server root you should change `publicPath` at two places.

In `webpack.config.js` (ATM line 147):

```
output: {
  path: buildPath,
  publicPath: '/your-app/',
  filename: 'app-[hash].js',
},
```

and in `source/js/routes` (ATM line 9):

```
const publicPath = '/your-app/';
```

Don't forget the trailing slash (`/`). In development visit `http://localhost:3000/your-app/`.

## Running in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run preview
```

## Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```

## Git hooks

Linting pre-push hook is not enabled by default.
It will prevent the push if lint task fails,
but you need to add it manually by running:

```
npm run hook-add
```

To remove it, run this task:

```
npm run hook-remove
```