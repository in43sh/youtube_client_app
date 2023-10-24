import { Component } from '@angular/core';
import { YoutubeDataServiceService } from 'src/app/youtube-data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  searchQuery: string = "";
  constructor(private youtubeDataServiceService: YoutubeDataServiceService) {}

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.youtubeDataServiceService.searchYouTube(this.searchQuery);
    this.searchQuery = '';
  }
}
