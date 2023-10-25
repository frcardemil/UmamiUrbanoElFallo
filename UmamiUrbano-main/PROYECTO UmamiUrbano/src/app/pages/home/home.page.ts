import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { Idatos } from 'src/app/interfaces/idatos';
import { LocalbdService } from 'src/app/services/localbd.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  agenda : Idatos[]=[];
  nombre!:string;
  nro!:number;

  user:any;
  private animation!: Animation;
  constructor(private activateRoute: ActivatedRoute, private router: Router, private animationController:AnimationController, public localbdservice:LocalbdService) {
    this.activateRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state) {
        this.user=this.router.getCurrentNavigation()?.extras.state?.["user"];
        console.log(this.user)
      }else{
        this.router.navigate(["/login"]);
      }
    });
  }
  guardar(){
    this.localbdservice.guardarContacto(this.nombre, this.nro);
  }
  borrarContacto(){
    this.localbdservice.borrarContacto(this.nro);
  }
  borrarBD(){
    this.localbdservice.borrarBD();
  }
  @ViewChild('animar1', {read: ElementRef, static: true})
  animar1!: ElementRef;

  ngAfterViewInit(){
    const animacion1=this.animationController
    .create()
    .addElement(this.animar1.nativeElement)
    .duration(3000)
    .iterations(Infinity)
    .keyframes([
      {offset: 0, background: 'blue'},
      {offset: 0.72, background: 'var(--background)'},
      {offset: 1, background: 'red'}
  ]);

    this.animation=this.animationController
    .create()
    .duration(3000)
    .iterations(Infinity)
    .addAnimation([animacion1]);

  this.animation.play();
  }

  segmentChanged($event:any){
    console.log($event);
    let direccion=$event.detail.value;
    this.router.navigate(['home/'+direccion])
  }
}
