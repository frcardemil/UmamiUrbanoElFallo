import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


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

  field:string="";

  constructor(private router: Router, public toastController:ToastController) { }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.user)
    if (this.validateModel(this.user)) {
      this.presentToast("top", "Bienvenido "+this.user.usuario);
      let navigationextras: NavigationExtras={
      state:{
        user: this.user
      }
    }
    this.router.navigate(["/home"], navigationextras);
  }else{
      this.presentToast("bottom","Falta rellenar "+ this.field, 3500);
  }
  }

  validateModel(model:any){
    for (var [key, value] of Object.entries(model)){
      if (value=="") {
      this.field=key;
    return false;
    }
  }
  return true;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message:string, duration?:number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration?duration:2000,
      position: position,
    });

    await toast.present();
  }
  
  registro(){
    this.router.navigate(["/recuperar"])
  }
}
