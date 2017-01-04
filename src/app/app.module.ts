//#region Angular Modules
//#
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//#endregion

//#region 3rd Party Modules

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//#endregion

//#region Custom components

import { NgStyleEx1Component } from './components/ngstyle/ngstyle-ex1.component';


//#endregion

import { AppComponent } from './app.component';

//#region main app module
//#
@NgModule({
  declarations: [
    AppComponent,
    NgStyleEx1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//#endregion
