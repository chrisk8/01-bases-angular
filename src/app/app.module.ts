import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ListComponent } from './characters/list/list.component';
import { CounterModule } from './counter/counter.module';
import { CharactersModule } from './characters/characters.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CharactersModule,
    CounterModule                    //Los modulos siempre van en los imports del modulo principal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
