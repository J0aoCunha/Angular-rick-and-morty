import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { locationsResponse } from '../models/locationresponse.model';
import { Location } from '../models/Location.model';
import { Char } from '../models/chars.model';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private linkApi = 'https://rickandmortyapi.com/api';

  constructor(private httpClient: HttpClient) {}

  obterLocations(page: number): Observable<locationsResponse> {
    return this.httpClient.get<locationsResponse>(
      `${this.linkApi}/location/?page=${page}`,
    );
  }

  getLocationsInfo(id: number): Observable<Location> {
    return this.httpClient.get<Location>(`${this.linkApi}/location/${id}`);
  }
}
