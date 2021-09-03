import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  brews:any[] = [];
  constructor(private Httpservice:HttpService) {  this.brews = [];
  }
  
  ngOnInit() {
  
    this.Httpservice.myapp().subscribe((data:any) => {
      this.brews=data;
      console.log(this.brews); 
    });
  }
  

 }


