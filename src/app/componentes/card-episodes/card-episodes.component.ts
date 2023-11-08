import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-episodes',
  templateUrl: './card-episodes.component.html',
  styleUrls: ['./card-episodes.component.css'],
})
export class CardEpisodesComponent {
  @Input() nameEpisodes: string = '';
  @Input() seasonEpisodes: string = '';
  @Input() date: String = '';
  @Input() id: string = '';
}
