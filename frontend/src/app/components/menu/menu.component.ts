import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  
  constructor(private router:Router, public dataService: DataService) { 
  }
  showInicio: boolean = true;
  showLogin: boolean = true;
  userProfile: boolean = false;
  chaps: boolean = false;
  ngOnInit(): void {
    
  }

  redirectTo(url:string){
    this.router.navigateByUrl(url);
  }

}
