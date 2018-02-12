# 🛠 react-webpack-starter
 React webpack starter pack ready for production and smooth development, it works with two basic commands, `npm start` to start running webpack dev server and `npm run build` this will build the entire project and minify, uglify everything. It includes Purifycss, this will remove any unused css from the code.
 
 In the alias section in the `webpack.config.js` file you find a line like this ` '@components': path.resolve(sourcePath, 'components')` make sure to add your redux store, graphQL schemas or any other paths here, it solves the issue of `../../../components/button` like imports.
