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
  
}
