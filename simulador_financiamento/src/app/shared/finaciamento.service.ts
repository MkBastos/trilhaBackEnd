import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FinaciamentoService {
  constructor(private router: Router) {}

  /* Financiamento aprovado se:
  a soma do valor aprovado com juros,
  divida pelo numero de parcelas é menor ou igual 30% da renda mensal
*/

  public jurosComposto(form: any) {
    let renda = form.renda
    let valor = form.valor - form.entrada
    let juros = 0.0067;
    let periodo = form.parcelas;
    let valorAcumulado = valor*Math.pow((1+ juros), periodo);
    let valorParcela = valorAcumulado / periodo

      if (valorParcela <= renda * 0.3) {
          this.router.navigate(['/aprovado'])
      } else {
        this.router.navigate(['/reprovado'])
      }
  }
}
