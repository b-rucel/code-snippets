# Webpack React Guide

This is the basics to get webpack started for a react project.

It will use babel to transpile the source. ES6 & ES7 friendly :)

> package.json

    {
      "name": "webpack.guide",
      "main": "webpack.config.js",
      "scripts": {
        "build": "webpack --progress --profile --colors",
        "watch": "webpack-dev-server --hot --inline --progress --colors",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "Bruce Lim",
      "license": "ISC",
      "dependencies": {
        "babel-runtime": "5.6.18",
        "react": "0.13.3"
      },
      "devDependencies": {
        "babel-core": "5.6.18",
        "babel-loader": "5.3.1",
        "html-webpack-plugin": "1.6.0",
        "webpack": "1.10.1",
        "webpack-dev-server": "1.10.1"
      }
    }

> buid source

    npm run build

> build and run

    npm run watch


