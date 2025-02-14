// Este componente usa la directiva ngFor para llenar una lista desordenada en el HTML con los elementos de la propiedad list
// Se usa la directiva ngIf-else para condicionar los mensajes que aparecen al hacer click en el boton
// 


import { Component } from '@angular/core';

@Component({
  selector: 'app-character-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //Se declaran los elementos de la lista como un array y se barre con el ngFor para mostrar cada elemento en una etiqueta <li></li>
  public list:        string[] = ['Vayne', 'Kaisa', 'Jinx', 'KogMaw', 'Jhin'];
  public deletedChar?: string = '';   

  //Metodo que elimina el ultimo elemento del arreglo y lo reorna.
  // La variable que almacena el elemento borrado solo tiene scope dentro del metodo. Para accesar a ese elemento globalmente en el codigo se tiene que crear una propiedad
  removeLast(): void{
    //const deletedcharacter = this.list.pop();  Aqui se guarda el elemento eliminado pero no se puede acceder a el desde el HTML por que no es una propiedad
    this.deletedChar = this.list.pop();  //Se declara la propiedad como opcional ya que el elemento puede valer undefined cuando ya no hay mas elementos en el arreglo, al hacerlo opcional se permite el valor undefined
  }
}
