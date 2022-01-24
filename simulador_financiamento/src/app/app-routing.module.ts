import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component'

const routes: Routes = [
  {path: '', component: TelaInicialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
