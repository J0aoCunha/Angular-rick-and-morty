import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.css'],
})
export class CardLocationComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() type: string = '';

  constructor() {}

  ngOnInit(): void {}
}
