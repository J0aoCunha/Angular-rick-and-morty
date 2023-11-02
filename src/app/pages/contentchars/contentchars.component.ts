import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Char } from 'src/app/models/chars.model';
import { ApirickandmortyService } from 'src/app/services/apirickandmorty.service';

@Component({
  selector: 'app-contentchars',
  templateUrl: './contentchars.component.html',
  styleUrls: ['./contentchars.component.css'],
})
export class ContentcharsComponent {
  imageChars: string = '';
  nameChars: string = '';
  genderChars: string = '';
  statusChars: string = '';
  specieChars: string = '';
  originChars: string = '';
  typeChars: string = '';
  locationChars: string = '';
  private id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private apirickandmortyService: ApirickandmortyService,
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.apirickandmortyService.getChar(this.id).subscribe((Char) => {
      this.imageChars = Char.image;
      this.nameChars = Char.name;
      this.genderChars = Char.gender;
      this.statusChars = Char.status;
      this.specieChars = Char.species;
      this.originChars = Char.origin.name;
      this.typeChars = Char.type || 'No type';
      this.locationChars = Char.location.name;
    });
  }
}
