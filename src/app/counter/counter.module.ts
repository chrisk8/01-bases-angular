// Los modulos son agrupadores, en el counter.module se definen los componentes del modulo counter
// Cada modulo debe tener su carpeta, dentro agrupar los componentes en carpeta components y ahi separar los componentes.
// Cada componente que se quiera usar dentro de este modulo, debe ser declarado (declarations)
// Cada componente que se quiera usar en otro modulo debe ser exportado (exports)

import { NgModule } from "@angular/core";
import { counterComponent } from "./components/counter/counter.component";

@NgModule({
    declarations: [           //Se agrupan todas las funcionalidades del componente
        counterComponent,
    ],

    exports: [                //Se exportan los componentes que se quieran usar en otro modulo
        counterComponent,
    ]
})
export class CounterModule {}