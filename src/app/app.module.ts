import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterComponent } from './counter/counter.component';
import { CharacterComponent } from './characters/character/character.component';
import { ListComponent } from './characters/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    counterComponent,
    CharacterComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
