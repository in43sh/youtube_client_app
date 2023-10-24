import { Component, OnInit } from '@angular/core';
// import { of } from 'rxjs';
import { YoutubeDataServiceService } from 'src/app/youtube-data-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {
  results: any; // variable to hold the search results
  constructor(private youtubeDataServiceService: YoutubeDataServiceService) { }
  data: any;

  ngOnInit() {
    this.youtubeDataServiceService.trigger.subscribe(data => {
        this.results = data; // assign the returned data to results variable
        console.log(this.results); // log the results
    });
  }

  // onGetData() {
  //   console.log("TESTESETSETSETSETSET");
  //   console.log("searchQuery ====> ", this.youtubeDataServiceService.searchQuery);
  //   of(this.youtubeDataServiceService.sub).subscribe(data => {
  //     console.log("data ===> ", data);
  //     this.data = data;
  //   })
  //   // this.youtubeDataServiceService.getData().subscribe(res => {
  //   //   console.log("res ===> ", res);
  //   //   this.data = res
  //   // });
  // }
}



