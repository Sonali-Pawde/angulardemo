import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Information } from './Information';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( ) { }

  postinformationForm(information  : Information){
    return of(information);
  }
}
