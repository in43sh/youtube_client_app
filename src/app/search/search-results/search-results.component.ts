import { Component } from '@angular/core';
import { YoutubeDataServiceService } from 'src/app/youtube-data-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent {
  constructor(private youtubeDataServiceService: YoutubeDataServiceService) { }
  data: any;

  onGetData() {
    this.youtubeDataServiceService.getData().subscribe(res => {
      console.log("res ===> ", res);
      this.data = res
    });
  }
}



