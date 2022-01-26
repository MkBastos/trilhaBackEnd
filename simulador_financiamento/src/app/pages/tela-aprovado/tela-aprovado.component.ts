import { FinaciamentoService } from './../../shared/finaciamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-aprovado',
  templateUrl: './tela-aprovado.component.html',
  styleUrls: ['./tela-aprovado.component.scss']
})
export class TelaAprovadoComponent implements OnInit {


  constructor(private service: FinaciamentoService) { }

  ngOnInit(): void {

  }

}
