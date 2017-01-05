# ![AngularJS](https://angular.io/resources/images/logos/standard/shield-large.png)

# Angular 2 - A Responsive NavBar built with Bootstrap 4
___
##Stack
* [Angular 2.3.1.]
* [Angular Router 3.3.1]
* [Bootstrap 4]
* [ng-bootstrap]
* [node-sass]

### Angular 2

Uses Angular CLI see below to scaffold the project.

### Bootstrap

* [Bootstrap 4 - Getting Started](https://ng-bootstrap.github.io/#/getting-started)

Bootstrap 4 requires
* [Angular 2]
* [Bootstrap CSS]

Install =>
> npm install bootstrap@4.0.0-alpha.5
> npm install --save @ng-bootstrap/ng-bootstrap

It also requires Tether:
* [see: Bootstrap 4 from NPM](https://forums.meteor.com/t/the-way-to-use-bootstrap-4-from-npm-including-js-and-tether/23159)

Add the following to Styles.scss
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

### SASS
To install SASS into the Angular CLI, you can use the following commands:

##### New Projects
>npm install node-sass sass-loader raw-loader --save-dev
>ng new My_New_Project --style=scss

##### Upgrade Existing Project
>ng set defaults.styleExt scss

## Scaffolded Using Angular CLI

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.
___
### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

___
