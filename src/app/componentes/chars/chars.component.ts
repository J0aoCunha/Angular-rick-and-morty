import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.css']
})
export class CharsComponent implements OnInit{

imageChars: string = '../../../assets/rick.png';
nameChars: string = 'Rick';
speciesChars: string = 'Human';


  constructor() {}

  ngOnInit(): void {}
  
}
