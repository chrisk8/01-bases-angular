// En Angular se procura no colocar toda la logica de una funcionalidad en el componente principal app.component.
// Se buscan componentes peque;os y encapsulados y que solo cumplan una funcion en especifico.
// Para eso se crean componentes independientes.
// Se pueden crear de forma manual o con el comando de angular CLI.
// En esta version se refactoriza el contador como un componente independiente y se crea de forma Manual.
// 1- Crear la carpeta del componente dentro del directorio app. En este caso "counter"
// 2- Crear el archivo de typescrypt conforme a las buenas practicas (.component indica que es un componente, .service que es un servicio). En este caso counter.component.ts
// 3- Para usar el componente en un modulo se tiene que exportar la CLASE. En este caso se exporta al modulo app.module.ts
// **Para crear un componente de forma automatica
//        - con el snipet a-component de la extension Angular snipets

import { Component, OnInit } from '@angular/core';
//Para indicar que la clase es un componente, se usa el decorador @Component() de @angular/core
//Se usan las {} en el parametro para configurar el componente
@Component({
    selector: 'app-counter',
    standalone: false, 
    //Propiedad template para disenar el HTML como un string, si se crea un componente se necesita un template
    //Se migra la funcionalidad de los botones del contador del app.component
    template: `
        <h1>Contador como un componente independiente</h1>
        <p> Conuter: {{ counter }} </p> 
        <!-- () para acceder a los eventos del boton
        En este caso se usa el evento (click)="funcion()" -->
        <button (click)="increaseBy( +1 )"> +1 </button>
        <button (click)="resetCounter()"> Reset </button>
        <button (click)="increaseBy( -1 )" > -1  </button>
    `,  
       
    //templateUrl: 'name.component.html'    //Para crear un componente mas complejo y hacer referencia al archivo. template para pocas lineas
})

export class counterComponent  {
    constructor() { }

    public counter: number = 10;


    //Metodo para incrementar el contador
    increaseByy(): void {
      this.counter = this.counter + 1;  //Forma corta [this.counter += 1]
    }
  
    //Metodo para icrementar, decrementar el contador segun el argumento
    increaseBy( value: number ): void {
      this.counter += value;
    }
  
    //Metodo para resetear el contador
    resetCounter(): void {
      this.counter = 10;
    }

}
// Este codigo lo crea el snipet pero puede ir sin el OnInit
// export class counterComponent implements OnInit {
//     constructor() { }

//     ngOnInit() { }
// }

