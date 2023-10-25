import { Injectable } from '@angular/core';
import { Idatos } from '../interfaces/idatos';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LocalbdService {
  agenda: Idatos[]=[];
  private _storage: Storage | null=null;
  constructor(private storage: Storage, public toastController:ToastController) {
    this.Init();
    this.cargarContactos();
   }

  async Init() {
    const storage=await this.storage.create();
    this._storage=storage
  }

  async cargarContactos() {
    const miAgenda= await this.storage.get('agenda');
    if (miAgenda){
      this.agenda=miAgenda;
    }
  }

  guardarContacto(nombre: string, nro:number){
    const existe=this.agenda.find(c=>c.intNumero===nro);
    if (!existe){
      this.agenda.unshift({strNombre:nombre, intNumero:nro});
      this._storage?.set('agenda', this.agenda);
      this.presentToast("contacto agregado con exito")
    }else{
      this.presentToast('contacto ya existe')
    }
  }
  async presentToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2500,
      position: 'top',
    })
  }
  async borrarContacto(nro:number){
    const existe=this.agenda.find(c=>c.intNumero===nro);
    if (!existe){
      this.agenda=this.agenda.filter(n=>n.intNumero !== nro);
      this._storage?.set('agenda', this.agenda);
      this.presentToast("contacto eliminado")

    }else{
      this.presentToast("contacto no existe")
    }
  }
  async borrarBD(){
    await this._storage?.clear();
    this.agenda=[];
    this.presentToast("BD Eliminada")
  }
}
