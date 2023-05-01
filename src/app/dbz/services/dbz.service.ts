import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
//clase que se va a poder inyectar
//clase abstracta donde iran la informacion y metodos para interactuar coon fuentes externas
// o para manipular el estado de la informacion
export class DbzService {
    //El unico lugar donde puede ser manipulado las cosas son en los serivcios

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        }
    ];
    //[] significa que es un arrglo y los ... que es un operado spread
    //separa los elementos independientes que tiene el arreglo
    //es buena practica de javascript

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    //metodos

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push( personaje );
    }




} 