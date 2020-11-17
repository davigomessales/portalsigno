import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignoListaComponent } from './signos/signo-lista/signo-lista.component';
import { SignoManterComponent } from './signos/signo-manter/signo-manter.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'signo/:id',
    component: SignoManterComponent,
    data: { animation: 'signo' }
  },
  {
    path: 'signos',
    component: SignoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
