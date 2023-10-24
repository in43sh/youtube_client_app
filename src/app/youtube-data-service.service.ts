import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;

interface YoutubeResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
      totalResults: number;
      resultsPerPage: number;
  }
  items: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataServiceService {
  data: any[] = [];

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get<YoutubeResponse>(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=kuji&key=${apiKey}`).subscribe({
      next: responseData => {
        this.data = responseData.items;
        console.log("this.data ====> ", this.data);
        return this.data;
      },
      error: err => {
        console.log("There was an error making the request:", err);
      }
    });
  }
}
