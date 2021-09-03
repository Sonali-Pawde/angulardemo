import { Component, OnInit } from '@angular/core';
import { Information } from '../data/Information';
import { HttpService } from '../http.service'; 
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  information :Information ={
    first_name : null,
    last_name : null,
    email : null,
    phone : null,
    organization : null,
    designation : null,
    salary : null
   

  }
  ;
  constructor ( private httpService :HttpService) { }

  public firstName:any;
  public LastName:any;
  public Email:any;
  public Phone:any;
  public Organization:any;
  public Designation:any;
  public Salary:any;
  public message:any;
  ngOnInit() : void {

  }
  // onSubmit(form :  NgForm){
  //   console.log('onSubmit' ,form.valid);
  //   this.httpService.postinformationForm(this.information).subscribe(//subscribe for posting form
  //     result => console.log('success',result),
  //     error => console.log('error',error)
  //   );
  // }
  insertDetails()
  {
    this.httpService.insertdata(this.firstName,this.LastName,this.Email,this.Phone,this.Organization,this.Designation,this.Salary).subscribe((data:any) => {
      var response=data;
      this.message=response.message;
      console.log(response);

    });
  
  }
}
