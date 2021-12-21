import { ListaNumerosComponent } from './../lista-numeros/lista-numeros.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.scss']
})
export class CuboComponent implements OnInit {

public nCubo: any;

  constructor(private route: ActivatedRoute) { }




  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {this.nCubo = params['numero'];});
    console.log(this.nCubo)

  }
}
