import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Signo } from './signo';

import { MessageService } from '../message.service';
import { SIGNOS } from './signos-repo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignoService {

  constructor(private messageService: MessageService) { }

  getSignos(): Observable<Signo[]>{
    this.messageService.add('SignoService: apanhar signos');
    return of(SIGNOS);
  }

  getSigno(id: number | string) {
    return this.getSignos().pipe(

      map((signos: Signo[]) => signos.find(signo => signo.id === +id))
    );
  }
}
