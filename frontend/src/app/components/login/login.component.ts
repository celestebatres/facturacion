import { Component, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { 
  }

  ngOnInit(): void {
  }
  redirectTo(url:string){
    this.router.navigateByUrl(url);
  }

  ingresar():void{
    this.router.navigateByUrl('/user');
  }
}
