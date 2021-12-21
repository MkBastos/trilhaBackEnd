import { Router } from '@angular/router';

import {Component, Input} from '@angular/core';

@Component ({
  selector: 'app-componente-pai',
  template: ""
})

export class ComponentePaiComponent {



  @Input() numeroComponent = 0;

  numero = this.numeroComponent;


  isPar(valor:number): string {
    return valor % 2 === 0 ? "par" : "impar";
    }

  isPrimo(valor:number): string {
    let nPrimo = valor;
    let divisores = 0;
    for (let i = 1; i <= nPrimo; i++) {
      if (nPrimo %  i === 0) {
        divisores++;
      }
    }
    if (divisores === 2) {
      return("é um numero primo.")
    } else {
      return("não é um numero primo.")
    }
  }

  constructor(private router: Router) {}

  numeroCubo() {
    this.router.navigate(['cubo'], {queryParams: {numero: this.numeroComponent}})
  }

}

