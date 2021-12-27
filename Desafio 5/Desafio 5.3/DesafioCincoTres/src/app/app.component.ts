import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DesafioCincoTres';

  url = "www.google.com.br"

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.url)
  }
}
