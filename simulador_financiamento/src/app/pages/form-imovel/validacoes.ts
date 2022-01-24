import { AbstractControl } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class Validacoes {

  static valorEntrada(campo: AbstractControl) {
    const valor = campo.parent?.get('valor')?.value;
    const entrada = campo.parent?.get('entrada')?.value;

    if (entrada < (valor * 0.20)) {
      return {entradaValida: true};
    } else {
      return null
    }
  }

  static numeroParcelas(campo: AbstractControl) {
    const parcela: Number = campo.parent?.get(('parcelas'))?.value;

    if (parcela  <= 360) {
      return null
    } else {
      return {parcelaValida: true}
    }
  }
}

