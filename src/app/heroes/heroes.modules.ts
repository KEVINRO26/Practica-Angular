import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent


    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        //Van solo modulos
        CommonModule
        //me ayuda a utilizar lo que es el *ngIf y el *ngFor sin esto me saldra error
    ]

})

export class HeroesModule{}