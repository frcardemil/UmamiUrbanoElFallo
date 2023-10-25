import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CompbuscarComponent } from 'src/app/components/compbuscar/compbuscar.component';
import { CompescribirComponent } from 'src/app/components/compescribir/compescribir.component';
import { CompperfilComponent } from 'src/app/components/compperfil/compperfil.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
      path:'buscar',
      component: CompbuscarComponent
      },
      {
        path:'escribir',
        component: CompescribirComponent
      },
      {
        path:'perfil',
        component: CompperfilComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
