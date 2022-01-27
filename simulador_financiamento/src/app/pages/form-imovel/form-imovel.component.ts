import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Validacoes } from './validacoes';

import { FinaciamentoService } from './../../shared/finaciamento.service';

@Component({
  selector: 'app-form-imovel',
  templateUrl: './form-imovel.component.html',
  styleUrls: ['./form-imovel.component.scss']
})
export class FormImovelComponent implements OnInit {

  formImovel = new FormGroup({
    tipo: new FormControl(null, [Validators.required]),
    renda: new FormControl(null, [Validators.required]),
    valor: new FormControl(null, [Validators.required]),
    entrada: new FormControl(null, [Validators.required, Validacoes.valorEntrada]),
    parcelas: new FormControl(null, [Validators.required, Validators.maxLength(3), Validacoes.numeroParcelas])
  })

  constructor(private service: FinaciamentoService) { }

  ngOnInit(): void { }

  public validarJuros(form : Number) {
    this.service.jurosComposto(form)
  }

}
