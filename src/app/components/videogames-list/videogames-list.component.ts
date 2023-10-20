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
    const newName = prompt('Enter new name:', game.name || "");
    const newImageUrl = prompt('Enter new image url:', game.imageUrl || "");
    const newDeveloper = prompt('Enter new game developer:', game.developer || "");
    const newDateString = prompt('Enter new date:', game.date?.toString() || "");
    const newPriceString = prompt('Enter new price:', game.price?.toString() || "");
  
    if (newName && newDeveloper && newDateString && newPriceString) {
      const newDate = parseInt(newDateString, 10);
      const newPrice = parseFloat(newPriceString);
  
      game.imageUrl = newImageUrl || undefined;
      game.name = newName || undefined;
      game.developer = newDeveloper || undefined;
      game.date = newDate || undefined;
      game.price = newPrice || undefined;
  
      this.videoGameService.updateVideoGame(game)
        .subscribe(updatedGame => {
          console.log('The game was successfully updated:', updatedGame);
        });
    }
  }

  showDetails(id: number): void {
    this.videoGameService.showDetails(id)
      .subscribe(videogame => {
        let message = `Name: ${videogame.name}\nDeveloper: ${videogame.developer}\nDate: ${videogame.date}\nPrice: ${videogame.price}\nImage URL: ${videogame.imageUrl}`; 
        alert(message); 
      });
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
  
