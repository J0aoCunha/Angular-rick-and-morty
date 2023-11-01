import { Component } from '@angular/core';
import { ApirickandmortyService } from '../../services/apirickandmorty.service';
import { Char } from 'src/app/models/chars.model';
import { CharsResponse } from 'src/app/models/Charsresponse.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  char: Char[] = [];


  constructor(private apirickandmortyService: ApirickandmortyService) {
    this.getChars();
  }

  getChars() {
    this.apirickandmortyService.obterPersoangens().subscribe(response => {
      this.char = response.results;
    });
  }

}


