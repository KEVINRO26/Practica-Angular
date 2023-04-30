import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.modules';
import { ContadorModule } from './contador/contador.modules';


@NgModule({
  declarations: [
    AppComponent
   // ContadorComponent, //componente creado de contador
 
    //Al crear un componente debe estar creado en un modulo.....
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
