import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacaoComponent } from './components/navegacao/navegacao.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BodyComponent } from './components/body/body.component';



@NgModule({
  declarations: [
    NavegacaoComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    NavegacaoComponent,
    BodyComponent
  ]
})
export class CoreModule { }
