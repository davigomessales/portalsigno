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
  @Output('signoEnviar') signoEmitir: EventEmitter<Signo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.inicializa();
  }

inicializa(){
  let valor: Date;
  valor = new Date(this.dataNascimento);
  //console.log(valor);
  //console.log("getDate", valor.getDate());
  //console.log("getMonth",valor.getMonth());
    SIGNOS.forEach(value => {
      console.log("value.dataInicial", value.dataInicial.toLocaleDateString());
      console.log("valor",valor.toLocaleDateString());
      console.log("value.dataFinal", value.dataFinal.toLocaleDateString());
      console.log("\n=====================================================\n");
     if(value.dataInicial <= valor && value.dataFinal >= valor){
         this.signo = value;
      }
      //console.log("Possivel signo do usuario", value.nome);
    })
}

}
