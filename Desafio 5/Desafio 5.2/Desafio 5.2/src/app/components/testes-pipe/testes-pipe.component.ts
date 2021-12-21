import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.scss']
})
export class TestesPipeComponent implements OnInit {

  evento: any = {
    dataEvento: new Date(2021, 9, 21),
    precoEvento: 35.00,
    limitadosEvento: 0.8465,

  };

  moeda = 57.90;
  data = new Date(2021/11/17);
  numeroDecimal = 4.75201030;
  numeroPercentual = 0.7911;
  minusculo = 'Miqueias Leal Bastos'
  maiusculo = 'Trilha Front-end'

  constructor() { }

  ngOnInit(): void {
  }

}
