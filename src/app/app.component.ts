import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template : `
 
   <nav-bar></nav-bar>
   <app-information></app-information>
 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo';
  public name="sonali";
}
