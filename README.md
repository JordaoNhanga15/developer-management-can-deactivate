# Angular + PrimeNG sample project #

This project is a simple sample of how to use PrimeNG with Angular.

## About Angular ##

Angular is a web front-end framework lead by the Angular team from Google.

See [https://angular.io/](https://angular.io/)

## About PrimeNG ##

PrimeNG as described in [its own site](https://www.primefaces.org/primeng/showcase/#/setup) is:

> PrimeNG is a rich set of open source native Angular UI components.

## How To ##

In order to use PrimeNG the first thing is to create an Angular project (workspace). You can do it on 
the terminal using [Angular Cli](https://angular.io/guide/setup-local#install-the-angular-cli) or you
can use some IDE utility for this purpose. I like to use the Intellij IDEA Angular Cli utility, but it 
is just a UI wrapper over the Angular Cli tool itself.
To do this with Angular Cli, just type something like this in a terminal:

```shell
ng new your-app-name
```

Then, inside the project directory, run those commands to install PrimeNG:

```shell
npm install primeng --save
npm install primeicons --save
```

Then add the primeng styles to the `angular.json` file

```json
"styles": [
  "node_modules/primeicons/primeicons.css",
  "node_modules/primeng/resources/themes/saga-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "src/styles.css"
]
```

Choose witch widget you will use and import its module to your AppModule

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//primeng imports
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule, // PrimeNG Calendar module import to use the Calendar widget 
    TableModule // // PrimeNG Table module import to use the Table widget
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

It is all you have to do to start using the PrimeNG widgets.

*Note: Many of the PrimeNG widgets like Calendar or Table depends on BrowserAnimationsModule 
from Angular.*

## PrimeFlex ##

PrimeFlex is a CSS utility library which the main purpose is to provide a 
[flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) 
grid system analogous to the [Bootstrap one](https://getbootstrap.com/docs/4.0/layout/grid/).

That's how PrimeFlex is described in its own [site](https://www.primefaces.org/primeng/showcase/#/primeflex):

> PrimeFlex is a CSS utility library featuring various helpers such as a grid system, 
> flexbox, spacing, elevation and more. Although it is not required, it is highly 
> recommended to add PrimeFlex as it is likely to need such utilities when developing 
> applications with PrimeNG.

To use PrimeFlex install it running this npm command:

```shell
npm install primeflex --save
```

Then add primeflex to the styles scripts section on the `angular.json` file of your project:

```json
"styles": [
  "node_modules/primeflex/primeflex.css",
  "src/styles.css"
]
```

## Copyright and license ##

Code and documentation copyright 2021 Fabio M. Blanco. Code released under the
[MIT License](https://github.com/fabio-blanco/test-primeng/blob/master/LICENSE)
