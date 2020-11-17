import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signo } from '../signos/signo';
import { SignoExibirComponent } from '../signos/signo-exibir/signo-exibir.component';
import { SIGNOS } from '../signos/signos-repo';

@Component({
  selector: 'signo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataNascimento: Date;
  dia: number;
  mes: number;
  signo: Signo;
  isClicado: boolean = false;
  resultado: String

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  descobreSigno(){
    if((this.mes >= 1 && this.mes <=12) && (this.dia >=1 && this.dia <= 31 )){
      this.isClicado = !this.isClicado;
      this.dataNascimento = new Date(2020, (this.mes - 1), this.dia);
    }
    else{
      alert("Data não permitida");
    }
  }

  listaSignos(){
    this.router.navigate(['/signos']);
  }

}
