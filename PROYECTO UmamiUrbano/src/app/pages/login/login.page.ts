import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={
    usuario:"",
    password:""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.user)
    let navigationextras: NavigationExtras={
      state:{
        user: this.user
      }
    }
    this.router.navigate(["/home"], navigationextras);
  }

  registro(){
    this.router.navigate(["/recuperar"])
  }
}
