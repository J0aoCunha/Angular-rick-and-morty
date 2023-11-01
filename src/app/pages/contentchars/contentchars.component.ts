import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contentchars',
  templateUrl: './contentchars.component.html',
  styleUrls: ['./contentchars.component.css']
})
export class ContentcharsComponent {

    constructor(private route: ActivatedRoute) { 

    }

    ngOnInit(): void {
      
    }

}
