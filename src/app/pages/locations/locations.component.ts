import { Component } from '@angular/core';
import { Location } from 'src/app/models/Location.model';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent {
  locations: Location[] = [];
  page: number = 1;

  constructor(private locationsService: LocationsService) {
    this.getLocations();
  }
  getLocations() {
    this.locationsService.obterLocations().subscribe((response) => {
      this.locations = response.results;

      console.log(this.locations);
    });
  }
}
