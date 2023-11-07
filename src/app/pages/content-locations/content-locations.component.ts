import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Location } from 'src/app/models/Location.model';
import { Char } from 'src/app/models/chars.model';
import { ApirickandmortyService } from 'src/app/services/apirickandmorty.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-content-locations',
  templateUrl: './content-locations.component.html',
  styleUrls: ['./content-locations.component.css'],
})
export class ContentLocationsComponent {
  nameEarth: string = '';
  typeName: String = '';
  dimensionName: string = '';
  private id: number = 0;

  Locations: Location[] = [];
  residents: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private locationsService: LocationsService,
    private apirickandmortyService: ApirickandmortyService,
  ) {}
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.locationsService.getLocationDetails(this.id).subscribe((location) => {
      this.nameEarth = location.name;
      this.typeName = location.type;
      this.dimensionName = location.dimension;

      // Percorre as URLs dos residentes e faz as requisições
      for (const residentUrl of location.residents) {
        this.apirickandmortyService
          .getCharacterDetailsByUrl(residentUrl)
          .subscribe((character) => {
            this.residents.push(character);
          });
      }
    });
  }
}
