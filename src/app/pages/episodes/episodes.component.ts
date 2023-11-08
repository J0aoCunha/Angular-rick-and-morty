import { Component } from '@angular/core';
import { Episode } from 'src/app/models/episodes.model';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent {
  episodes: Episode[] = [];
  page: number = 1;

  constructor(private episodesService: EpisodesService) {
    this.getEpisodes();
  }

  getEpisodes() {
    this.episodesService.obterEpisodes(this.page).subscribe((response) => {
      this.episodes = response.results;
    });
  }

  loadmore() {
    this.episodesService.obterEpisodes(this.page + 1).subscribe((response) => {
      this.episodes = [...this.episodes, ...response.results];
      this.page++;
    });
  }
}
