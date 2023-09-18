import { Component, OnInit } from '@angular/core';
import { VideoGame } from 'src/app/models/VideoGame';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-videogames-list',
  templateUrl: './videogames-list.component.html',
  styleUrls: ['./videogames-list.component.css']
})
export class VideogamesListComponent {
  videoGames: VideoGame[] = [];

  constructor(private videoGameService: VideoGameService) { }

  ngOnInit() {
    this.videoGameService.getVideoGames()
      .subscribe(data => {
        this.videoGames = data;
      });
  }

  editGame(game: VideoGame): void {
    const newName = prompt('Enter new name:', game.name);
    const newDeveloper = prompt('Enter new game developer:', game.developer);
    const newDateString = prompt('Enter new date:', game.date?.toString()); 
    const newPriceString = prompt('Enter new price:', game.price?.toString()); 
  
    if (newName && newDeveloper && newDateString && newPriceString) {
      const newDate = parseInt(newDateString, 10); 
      const newPrice = parseFloat(newPriceString); 
  
      game.name = newName;
      game.developer = newDeveloper;
      game.date = newDate;
      game.price = newPrice;
  
      this.videoGameService.updateVideoGame(game)
        .subscribe(updatedGame => {
          console.log('The game was successfully updated:', updatedGame);
        });
    }
  }
  

  deleteGame(id: number): void {
    const confirmDelete = confirm('Really want to delete this game?');

    if (confirmDelete) {
      this.videoGameService.deleteVideoGame(id)
        .subscribe(() => {
          console.log('The game was deleted.');
        });
    }
  }
}
