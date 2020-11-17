import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Signo } from '../signo';
import { SignoService } from '../signo.service';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'signo-signo-lista',
  templateUrl: './signo-lista.component.html',
  styleUrls: ['./signo-lista.component.css']
})
export class SignoListaComponent implements OnInit {

  signos$: Observable<Signo[]>;
  idSelecionado: number;

  constructor(
    private service: SignoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.signos$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.idSelecionado = +params.get('id');
        return this.service.getSignos();
      })
    );
  }

  voltar(){
    this.router.navigate(['/']);
  }

}
