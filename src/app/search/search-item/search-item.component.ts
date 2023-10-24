import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const apiKey = environment.apiKey;

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  // Inject HttpClient via the constructor
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("apiKey ====> ", apiKey);
    // Make the HTTP request
    this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet,id&key=${apiKey}`).subscribe({
      next: data => {
        console.log("inside this.http.get()");
        // Log the response data from the server
        console.log("data ===> ", data);
      },
      error: err => {
        console.log("There was an error making the request:", err);
      }
    });
  }

}