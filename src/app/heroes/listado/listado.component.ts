import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

heroes: string [] = ['Spiderman','Hulk', 'Thor'];
heroeBorrado: string ='';
habilitar: boolean = false;
borrar(): void{

  this.heroeBorrado=this.heroes.pop();

}

setHabilitar(): void{

  if (this.habilitar == false) {this.habilitar = true}
  else if (this.habilitar == true) {this.habilitar = false}

}


}
