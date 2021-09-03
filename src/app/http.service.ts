import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Information } from '../data/app/information';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private Http:HttpClient) { }

  insertdata(firstName:string, lastName:string,email:string,phone:string,organization:string,designation:string,salary:string){
    var data={
      first_name:firstName,
      last_name:lastName,
      email:email,
      phone:phone,
      organization:organization,
      designation:designation,
      salary:salary
    }
    console.log(data);
    return this.Http.post<any>('http://192.168.0.65:5000/api/v1/employees',data);
  }
  myapp(){

    return this.Http.get('https://api.openbrewerydb.org/breweries')    
    
  }
  getdata(){
    return this.Http.get('http://localhost:5000/api/v1/employees');
  }
  postinformationForm(information  : Information){
    return of(information);
  }
}

