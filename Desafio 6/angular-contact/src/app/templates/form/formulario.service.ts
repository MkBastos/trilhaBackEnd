import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormComponent } from './form.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  baseUrl = "http://localhost:3000/contact-us"



  constructor(private http: HttpClient) { }

  enviar(form : any) {
    console.log("Serviço respondendo!", form)
    this.http.post(this.baseUrl, form).subscribe();
  }
}
