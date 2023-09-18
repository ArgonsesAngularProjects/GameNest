import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogamesListComponent } from './components/videogames-list/videogames-list.component';
import { AddVideogameComponent } from './components/add-videogame/add-videogame.component';

const routes: Routes = [
  {path: '', component: VideogamesListComponent},
  {path: 'add-game', component: AddVideogameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
