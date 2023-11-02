import { Component } from '@angular/core';
import { Char } from 'src/app/models/chars.model';
import { ApirickandmortyService } from '../../services/apirickandmorty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  char: Char[] = [];
  page: number = 1;

  constructor(private apirickandmortyService: ApirickandmortyService) {
    this.getChars();
  }

  getChars() {
    this.apirickandmortyService
      .obterPersonagens(this.page)
      .subscribe((response) => {
        this.char = response.results;
      });
  }

  loadMore() {
    this.apirickandmortyService
      .obterPersonagens(this.page + 1)
      .subscribe((response) => {
        this.char = [...this.char, ...response.results];
        this.page++;
      });
  }
}
