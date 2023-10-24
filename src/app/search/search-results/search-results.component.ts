import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  data: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("apiKey ====> ", apiKey);
    this.http.get<YoutubeResponse>(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=kuji&key=${apiKey}`).subscribe({
      next: responseData => {
        this.data = responseData.items;
        console.log("this.data ====> ", this.data);
      },
      error: err => {
        console.log("There was an error making the request:", err);
      }
    });
  }
}



