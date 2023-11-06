import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { locationsResponse } from '../models/locationresponse.model';

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
}
