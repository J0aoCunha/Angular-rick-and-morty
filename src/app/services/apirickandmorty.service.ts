import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharsResponse } from 'src/app/models/Charsresponse.model';
import { Char } from '../models/chars.model';

@Injectable({
  providedIn: 'root',
})
export class ApirickandmortyService {
  private linkApi = 'https://rickandmortyapi.com/api/';

  constructor(private httpClient: HttpClient) {}

  obterPersonagens(page: number): Observable<CharsResponse> {
    return this.httpClient.get<CharsResponse>(
      `${this.linkApi}/character/?page=${page}`,
    );
  }

  getChar(id: number): Observable<Char> {
    return this.httpClient.get<Char>(`${this.linkApi}/character/${id}`);
  }
}
