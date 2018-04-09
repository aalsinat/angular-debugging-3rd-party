## Angular debugging & 3rd party modules

### Debugging
1. User browser developer tools as a starting point.
2. On sources tab from developer tools use `webpack://` folder to debug your *TypeScript* code.
3. Use **Angular Augury** extension for Chrome. It creats a new tab on developers tools named Augury where you can browse Components

### Extending
1. Adding `bootstrap` styles. On a terminal window you can install `npm install bootstrap --save`. With that installed, you have to open `.angular-cli.json` file and go to `styles` array for adding another import before `styles.css`. The reference to the file we want to use is the following path: `../node_modules/bootstrap/dist/css/bootstrap.min.css`. You have to stop your `ng serve` process in order to this changes take effect.
2. Like you've done with styles, you can add additional scripts on `.angular-cli.json` scripts array. 
3. Let's add `lodash` javascript library, using `npm install lodash --save`. The **issue** that we have with `lodash` and most script packages is that they are written in *JavaScript*, but we are using *TypeScript*. Good news is that you can simply makes JavaScript in TypeScript, using `import 'lodash'` with no path. But if they exist, it's better to use Type Definitions for lodash. In that case we will use `npm install --save @types/lodash`.

### Useful Links & Resources
More about Augury: https://augury.angular.io/
More about TypeScript + 3rd Party Libraries: https://www.thepolyglotdeveloper.com/2017/03/javascript-libraries-in-a-typescript-application-revisited/

