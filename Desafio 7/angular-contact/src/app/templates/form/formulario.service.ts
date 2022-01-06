import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
