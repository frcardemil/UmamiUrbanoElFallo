import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data:any;
  private animation!: Animation;
  constructor(private activateRoute: ActivatedRoute, private router: Router, private animationController:AnimationController) {
    this.activateRoute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state) {
        this.data=this.router.getCurrentNavigation()?.extras.state?.["user"];
        console.log(this.data)
      }else{
        this.router.navigate(["/login"]);
      }
    });
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
}
