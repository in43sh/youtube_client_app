import { Component, OnInit } from '@angular/core';

import { YoutubeDataServiceService } from 'src/app/youtube-data-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {
  results: any;
  data: any;
  constructor(private youtubeDataServiceService: YoutubeDataServiceService) { }

  ngOnInit() {
    this.youtubeDataServiceService.trigger.subscribe(data => {
        this.results = data;
        console.log(this.results);
    });
  }
}



