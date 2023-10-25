import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CompbuscarComponent } from 'src/app/components/compbuscar/compbuscar.component';
import { CompescribirComponent } from 'src/app/components/compescribir/compescribir.component';
import { CompperfilComponent } from 'src/app/components/compperfil/compperfil.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CompbuscarComponent, CompescribirComponent, CompperfilComponent]
})
export class HomePageModule {}
