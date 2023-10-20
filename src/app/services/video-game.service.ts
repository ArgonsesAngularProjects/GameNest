import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoGame } from '../models/VideoGame';


@Injectable({
  providedIn: 'root',
})
export class VideoGameService {
  private baseUrl = 'http://localhost:3000/videoGames'; 

  constructor(private http: HttpClient) {}

  getVideoGames(): Observable<VideoGame[]> {
    return this.http.get<VideoGame[]>(this.baseUrl);
  }

  createVideoGame(videoGame: VideoGame): Observable<VideoGame> {
    return this.http.post<VideoGame>(this.baseUrl, videoGame);
  }

  updateVideoGame(videoGame: VideoGame): Observable<VideoGame> {
    const url = `${this.baseUrl}/${videoGame.id}`;
    return this.http.put<VideoGame>(url, videoGame);
  }

  showDetails(id: number): Observable<VideoGame> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<VideoGame>(url)
  }

  deleteVideoGame(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
