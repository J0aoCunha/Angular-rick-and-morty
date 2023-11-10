import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/models/episodes.model';
import { ApirickandmortyService } from 'src/app/services/apirickandmorty.service';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-content-episodes',
  templateUrl: './content-episodes.component.html',
  styleUrls: ['./content-episodes.component.css'],
})
export class ContentEpisodesComponent {
  nameEpisode: string = '';
  EpisodesSeason: string = '';
  Date: string = '';
  private id: number = 0;

  Cast: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private episodesService: EpisodesService,
    private apirickandmortyService: ApirickandmortyService,
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.episodesService.getEpisodeDetails(this.id).subscribe((episode) => {
      this.nameEpisode = episode.name;
      this.EpisodesSeason = episode.episode;
      this.Date = episode.air_date;

      for (const CastUrl of episode.characters) {
        this.apirickandmortyService
          .getCharacterDetailsByUrl(CastUrl)
          .subscribe((character) => {
            this.Cast.push(character);
          });
      }
    });
  }
}
