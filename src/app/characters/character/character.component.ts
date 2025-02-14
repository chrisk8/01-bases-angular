// En estos ajustese se trabaja con programacion basada en modulos, es decir, cada modulo debra tener su propia carpeta.
// Ejemplo: Si se tiene un perfil, se tendra una carpeta perfil ara ese componente y dentro
// se agrupan sus funcionalidades tambien por carpetas.
// Para generar componentes con ayuda del angular CLI se usa el comando 'ng g component nameComponent'
// El nombre del componente tambien puede ser el path donde se quiere crear.
// En este caso se crea un componente heroe y lista. ng g c heroes/hero
// Se muestran las propiedades de la clase character al html del componente
// Se usara la directiva ngIf para mostrar u ocultar botones


import { Component } from '@angular/core';

@Component({
  selector: 'app-characters-character',
  standalone: false,
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  public nameChar: string = 'Vayne';
  public skinName: string = 'Bat Vayne';
  public skill:    string = 'Condena'

  //los getters en una calse son un metodo de signacion de valores pero typescript lo ptoma como una propiedad
  get capitalizedName(): string{
    return this.nameChar.toUpperCase();
  }

  //En angular se puede declarar cualquier expresion de JS dentro de las {{ expresion js }} incluyendo los metodos de la clase
  getSkillName(): string{
    return ` ${ this.skinName } uso ${ this.skill }  `;
  }

  //Metodo que cambia el nombre, se usa en el boton "Cambiar personaje"
  changeCharacter(): void{
    this.nameChar = 'Jinx';
  }

  //Metodo que cambia la habilidad del personake, se usa en el boton "Cambiar skill"
  changeSkill(): void{
    this.skill = '!ZAP!';
  }

  //Resetea los valores del name y skill del personaje, se usa en el boton "Reset"
  resetValues(): void{
    this.nameChar = 'Vayne';
    this.skill = 'Condena';
  }
}
