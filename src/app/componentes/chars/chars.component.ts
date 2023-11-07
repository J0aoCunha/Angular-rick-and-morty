import { Component, Input, OnInit } from '@angular/core';
import { ApirickandmortyService } from 'src/app/services/apirickandmorty.service';
@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.css'],
})
export class CharsComponent implements OnInit {
  @Input() id: string = '0';
  @Input() imageChars: string = '';
  @Input() nameChars: string = '';
  @Input() speciesChars: string = '';

  constructor() {}
  ngOnInit(): void {}
}
