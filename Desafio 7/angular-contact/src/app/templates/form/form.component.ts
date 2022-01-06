import { FormularioService } from './formulario.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formulario = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required, Validators.minLength(10 )])
  });

  getErrorMessage() {
    if (this.formulario.hasError('required')) {
      return "Campo obrigatório!";
    }
    return this.formulario.hasError('email') ? 'Não é um e- mail válido.' : '';
  }

  constructor(private service: FormularioService) { }

  responsivity = false

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 1060) {
      this.responsivity = true
  } else {
    this.responsivity = false
  }
}

  ngOnInit(): void {
    if (window.innerWidth <= 1060) {
      this.responsivity = true
    }

  }

  onSubmit() {
    console.log("Chamando o service..."),
    this.service.enviar(this.formulario.value);
    this.formulario.reset();
  }

}
