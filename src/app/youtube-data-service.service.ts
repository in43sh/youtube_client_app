import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class YoutubeDataServiceService {
  @Output() trigger: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  searchYouTube(query: string) {
    this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}`).subscribe(data => {
      this.trigger.emit(data);
    });
  }
}
