import { Component } from '@angular/core';
import { Char } from 'src/app/models/chars.model';
import { ApirickandmortyService } from '../../services/apirickandmorty.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FiltersServiceService } from 'src/app/services/filters-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  char: Char[] = [];
  page: number = 1;
  filteredChar: any[] =[]; // a lista filtrada de personagens
  private subscription:Subscription | undefined;

  constructor(private apirickandmortyService: ApirickandmortyService,private filterService: FiltersServiceService) {
    this.getChars();
  }

  ngOnInit() {
    this.subscription = this.filterService.nameFilter$.subscribe(nameFilter => {
      this.filteredChar = this.char.filter(character => character.name.includes(nameFilter));
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getChars() {
    this.apirickandmortyService
      .obterPersonagens(this.page)
      .subscribe((response) => {
        this.char = response.results;
      });
  }
  onFilterChange(nameFilter: string) {
    this.char = this.char.filter(character => character.name.includes(nameFilter));
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
