import { TestesPipeComponent } from './components/testes-pipe/testes-pipe.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'lista', component: ListaNumerosComponent},
  {path: 'quadrado', component: QuadradoComponent},
  {path: 'cubo', component: CuboComponent},
  {path: 'testes-pipe', component: TestesPipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
