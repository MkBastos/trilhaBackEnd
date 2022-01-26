import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import { Validacoes } from './validacoes';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {

  private onlyNumber = "[0-9]*"
  private caracteres = "[a-zA-Z]*"

  formCliente!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario() {
    this.formCliente = this.fb.group({
      name: new FormControl(null, [Validators.required, Validators.pattern(this.caracteres), Validators.minLength(3)]),
      job: new FormControl(null, [Validators.required]),
      cpf: new FormControl(null, [Validators.required, Validators.pattern(this.onlyNumber), Validators.minLength(11)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      birth: new FormControl(null, [Validators.required, Validacoes.getIdade]),
      cep: new FormControl(null, [Validators.required, Validators.pattern(this.onlyNumber), Validators.minLength(8)]),
      celular: new FormControl(null, [Validators.required, Validators.pattern(this.onlyNumber), Validators.minLength(11)]),
    })
  }

}
