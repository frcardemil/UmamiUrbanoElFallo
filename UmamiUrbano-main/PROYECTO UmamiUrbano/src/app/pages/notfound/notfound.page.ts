import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
})
export class NotfoundPage implements OnInit {

  private animation!: Animation;

  constructor(private animationController:AnimationController) { }

  ngOnInit() {
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
