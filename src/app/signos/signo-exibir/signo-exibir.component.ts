import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Signo } from '../signo';
import { SIGNOS } from '../signos-repo';

@Component({
  selector: 'signo-signo-exibir',
  templateUrl: './signo-exibir.component.html',
  styleUrls: ['./signo-exibir.component.css']
})
export class SignoExibirComponent implements OnInit {

  signo: Signo = new Signo();
  @Input() dataNascimento: Date;

  constructor() { }

  ngOnInit(): void {
    this.inicializa();
  }

inicializa(){
  let valor: Date;
  valor = new Date(this.dataNascimento);
    SIGNOS.forEach(value => {
     if(value.dataInicial <= valor && value.dataFinal >= valor){
         this.signo = value;
      }
    })
}

}
