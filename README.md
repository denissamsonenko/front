[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Command for EsLint
 * standard --fix - auto fix style
 * JavaScript Standard Style - (https://standardjs.com)
 

### Logger usage

* Logger - https://www.npmjs.com/package/webpack-log

## Instructions:

#### Command line usage:
  
  * npm install - load libraries to node-modules  
  * npm start - run live server  
  * npm run dev 
  * npm run build
  * npm install -S <имя библиотеки> - установка библиотекиProduction
  * npm install <имя библиотеки> --save-dev - установка библиотеки в dev секцию
  * npm uninstall <имя библиотеки> - удаление библиотеки
  * npm update <имя библиотеки>  - обновление библиотеки
  * npm list – все установленные пакеты
  * npm outdated --depth=0 - список установленных пакетов, которые требуют обновления.
  * npm --version - показывает установленную версию npm
  * npm help, npm help <имя команды>  - cписок доступных команд

### prod Dependency

* react 
* react-dom

### dev Dependency:

 * webpack
 * webpack-cli - for console management
 * clean-webpack-plugin - for delete previous build
 * css-minimizer-webpack-plugin - solve problems related to duplicate css classes
 * html-webpack-plugin - interacting with html 
 * mini-css-extract-plugin - basically css mount into html, but this creates css file separate  
 * terser-webpack-plugin - minify/minimize Js
 * copy-webpack-plugin - for copy files (new CopyWebpackPlugin, param: from, to)
 * webpack-dev-server - hot reload pages
 * style-loader (reading .css, {pattern: /\.css$/})
 * css-loader (for ordinary .css)
 * file-loader (reading .jpg, .svg and others {pattern: /\.(png|jpg|svg|gif)$/}), hash path to static resources
 * file_loader (reading fonts, {pattern: /\.(ttf|woff|woff2|eot)$/})
 * xml-loader (reading xml, {pattern: /\.xml$/})
 * csv-loader (reading csv, {pattern: /\.csv$/ })
 * cross-env - automatically identify OS and assign variable to "dev" or "prod" 
 * babel-loader - see next desc
 * @babel/core - work with outdated browsers
 * @babel/preset-env - allow to use all changing for lang (release or plan to implementation) 
 * @babel/preset-react - predefined kit plugins
 * unused-files-webpack-plugin - unused files notification
 * eslint - checking spell 
 * eslint-plugin-react 
