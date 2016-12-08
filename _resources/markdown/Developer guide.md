##### Before you start
1. Install [io.js](//github.com/iojs/io.js) (or [Node.js](//github.com/joyent/node) with no guarantee) via:
  - [nvm](//github.com/creationix/nvm) (Linux/Mac)
  - [io.js official website](//iojs.org) (Windows)

2. Install [gulp.js](//github.com/gulpjs/gulp)
   > npm install -g gulp

3. **cd** to your workspace and install all dependencies
   > cd ~/Popup-my-Bookmarks
   >
   > npm install

##### Commands
1. compile
   > gulp compile --version x.y.z.ddmm

   To compile the whole extension and output a zip file for uploading to Chrome Web Store

2. dev
   > gulp dev

   To make a temporary folder "__dev" for you to load unpacked extension
   - ES6 JavaScript to ES5 JavaScript by [Babel](//github.com/babel/babel)
   - *.styl to *.css by [Stylus](//github.com/stylus/stylus)
   - *.jade to *.html by [Jade](//github.com/jadejs/jade)

3. help
   > gulp help

   Display developer guide on terminal

4. lint
   > gulp lint

   To lint
   - ES6 JavaScript code by [ESLint](//github.com/eslint/eslint)
   - CoffeeScript code by [CoffeeLint](//github.com/clutchski/coffeelint)
   - Stylus code by [Stylint](//github.com/rossPatton/stylint)

5. md
   > gulp md --make file_name

   To generate markdown file on the current directory
   - __store.md - Description for Chrome Web Store
   - README.md - Description for GitHub