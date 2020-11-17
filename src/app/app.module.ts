import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SignoListaComponent } from './signos/signo-lista/signo-lista.component';
import { SignoManterComponent } from './signos/signo-manter/signo-manter.component';
import { SignoExibirComponent } from './signos/signo-exibir/signo-exibir.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignoListaComponent,
    SignoManterComponent,
    SignoExibirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
