import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { CharacterComponent } from "./character/character.component";
import { ListComponent } from "./list/list.component";


@NgModule({
    declarations: [
        CharacterComponent,
        ListComponent
    ],
    exports: [
        CharacterComponent,
        ListComponent,
    ],
    imports: [
        CommonModule,               //El modulo de Common se usa para hacer funcionar las directivas
    ]
})
export class CharactersModule{}