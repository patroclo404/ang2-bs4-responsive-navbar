//#region Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//#endregion

//#region 3rd Party Modules
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//#endregion

//#region Custom Modules
import { HomeModule } from './modules/home';
import { BootstrapNavbarModule } from './modules/bootstrap-navbar'

//#endregion

import { AppComponent } from './app.component';

//#region Custom components

//#endregion


//#region main app module
//#
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    BootstrapNavbarModule,
    RouterModule.forRoot([]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//#endregion
