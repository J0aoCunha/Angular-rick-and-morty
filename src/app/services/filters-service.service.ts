import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersServiceService {


  nameFilter$ = new BehaviorSubject<string>('');

  setNameFilter(name: string) {
    this.nameFilter$.next(name);
  }
}
