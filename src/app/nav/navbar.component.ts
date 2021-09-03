import {Component} from '@angular/core';

@Component({
    selector : 'nav-bar',
    templateUrl : './navbar.component.html',
    styles : [`
    .navbar-brand { font-size : 15 px;}
    @searchForm {margin-right : 100px;}
    @media (max-width :1200px) {#searchForm {display:none}}
    `]
})

export class NavBarComponent{
   title="Angular project";
}



