import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-content-locations',
  templateUrl: './content-locations.component.html',
  styleUrls: ['./content-locations.component.css'],
})
export class ContentLocationsComponent {
  nameEarth: string = 'Earth (Replacement Dimension)';
  typeName: String = 'Planet';
  dimensionName: string = 'Replacement Dimension';
  private id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private locationsService: LocationsService,
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.locationsService.getLocationsInfo(this.id).subscribe((Location) => {
      this.nameEarth = Location.name;
      this.typeName = Location.type;
      this.dimensionName = Location.dimension;
    });
  }
}
