import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(private dataService : DataService, private router: Router) {
    this.dataService.showUser = true;
  }

  ngOnInit(): void {
  }

  redirectTo(url:string){
    this.router.navigateByUrl(url);
  }

}
