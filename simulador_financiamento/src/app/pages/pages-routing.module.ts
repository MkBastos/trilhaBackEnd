
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { FormImovelComponent } from './form-imovel/form-imovel.component'
import { TelaReprovadoComponent } from './tela-reprovado/tela-reprovado.component';
import { TelaAprovadoComponent } from './tela-aprovado/tela-aprovado.component';

  const routes: Routes = [
    {path: '', component: TelaInicialComponent},
    {path: 'formCliente', component: FormClienteComponent},
    {path: 'formImovel', component: FormImovelComponent},
    {path: 'aprovado', component : TelaAprovadoComponent},
    {path: 'reprovado', component : TelaReprovadoComponent}
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
