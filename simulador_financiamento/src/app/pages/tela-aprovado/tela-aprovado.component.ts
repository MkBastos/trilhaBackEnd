import { Subscription } from 'rxjs';
import { FinaciamentoService } from './../../shared/finaciamento.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-tela-aprovado',
  templateUrl: './tela-aprovado.component.html',
  styleUrls: ['./tela-aprovado.component.scss']
})
export class TelaAprovadoComponent implements OnInit {

  msgParcela!: string;
  msgValor!: string;
  subParcela!: Subscription;
  subValor!: Subscription;


  constructor(private service: FinaciamentoService ) { }

  ngOnInit(): void {
    this.subParcela =
    this.service.currentParcela.subscribe(message => this.msgParcela = message)
    this.subValor =
    this.service.currentValor.subscribe(message => this.msgValor = message)
   }

   ngOnDestroy() {
     this.subParcela.unsubscribe();
   }

}
