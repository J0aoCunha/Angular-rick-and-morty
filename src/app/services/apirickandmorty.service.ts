import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharsResponse } from 'src/app/models/Charsresponse.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirickandmortyService {

  private linkApi = 'https://rickandmortyapi.com/api/';

  constructor(private httpClient: HttpClient) {

  }

  obterPersoangens(): Observable<CharsResponse> {

    return this.httpClient.get<CharsResponse>(`${this.linkApi}/character`);
  }

}