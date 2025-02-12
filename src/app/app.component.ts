import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //Selector de referencia para crear la relacion entre el html y el .ts
  templateUrl: './app.component.html',  //path del html
  standalone: false,
  styleUrl: './app.component.css'  //path de los estilos
})
export class AppComponent {    //Propiedades de la clase
  public title: string = '01-bases-angular';   
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
