import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EpisdesResponse } from '../models/Episodesresponse.model';
@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private linkApi = 'https://rickandmortyapi.com/api/episode/?page=';
  constructor(private httpClient: HttpClient) {}

  obterEpisodes(page: number): Observable<EpisdesResponse> {
    return this.httpClient.get<EpisdesResponse>(`${this.linkApi}${page}`);
  }
}
