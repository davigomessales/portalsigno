import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Signo } from '../signo';
import { SignoService } from '../signo.service';

@Component({
  selector: 'signo-signo-manter',
  templateUrl: './signo-manter.component.html',
  styleUrls: ['./signo-manter.component.css']
})
export class SignoManterComponent implements OnInit {

  signo$: Observable<Signo>;
  isEdita: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SignoService

  ) { }

  ngOnInit() {
    this.signo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.service.getSigno(params.get('id')))
    );
  }

  gotosignos(signo: Signo){
    const signoId = signo ? signo.id : null;
    this.router.navigate(['/signos']);
  }

  permiteEdicao(){
    this.isEdita = !this.isEdita;
  }


}
