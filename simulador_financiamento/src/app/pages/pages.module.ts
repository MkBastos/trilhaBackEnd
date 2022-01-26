import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaAprovadoComponent } from './tela-aprovado/tela-aprovado.component';
import { TelaReprovadoComponent } from './tela-reprovado/tela-reprovado.component'
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { FormImovelComponent } from './form-imovel/form-imovel.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    TelaInicialComponent,
    FormClienteComponent,
    FormImovelComponent,
    TelaAprovadoComponent,
    TelaReprovadoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),

  ],
  providers: [  ]
})
export class PagesModule { }
