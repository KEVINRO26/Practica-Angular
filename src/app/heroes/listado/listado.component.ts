import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {
/*
  constructor(){}

  ngOnInit(): void {
    // se utilliza para inicializar, peticion algun servicio 
  } */

  heroes: string[] = ['Iroman', 'Thor', 'Hulk']
  heroeBorrado: string = '';

 

  borrarHeroe(){
    
    this.heroeBorrado = this.heroes.shift() || '';
    


  }

}
