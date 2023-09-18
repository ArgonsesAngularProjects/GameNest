import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogamesListComponent } from './components/videogames-list/videogames-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddVideogameComponent } from './components/add-videogame/add-videogame.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    VideogamesListComponent,
    AddVideogameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
