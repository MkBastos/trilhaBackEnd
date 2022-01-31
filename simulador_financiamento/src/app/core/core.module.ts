import { PagesRoutingModule } from './../pages/pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavegacaoComponent } from './components/navegacao/navegacao.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { AutoFocusModule } from '../shared/directives/auto-focus/auto-focus.module';

@NgModule({
  declarations: [
    NavegacaoComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    PagesRoutingModule,
    AutoFocusModule
  ],
  exports: [
    NavegacaoComponent,
  ]
})
export class CoreModule { }
