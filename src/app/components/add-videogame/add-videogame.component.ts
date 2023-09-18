import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VideoGame } from 'src/app/models/VideoGame';
import { VideoGameService } from 'src/app/services/video-game.service';


@Component({
  selector: 'app-add-videogame',
  templateUrl: './add-videogame.component.html',
  styleUrls: ['./add-videogame.component.css']
})
export class AddVideogameComponent {
  newVideoGame: VideoGame = new VideoGame();

  constructor(private videoGameService: VideoGameService, private router: Router) {}

  addGame(): void {
    if (this.newVideoGame.name && this.newVideoGame.developer) {
      this.videoGameService.createVideoGame(this.newVideoGame)
        .subscribe(newGame => {
          console.log('The game was successfully added:', newGame);
          
          this.router.navigate(['/']);
        });
    }
  }
}
