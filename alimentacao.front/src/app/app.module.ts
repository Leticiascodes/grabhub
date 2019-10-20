import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnviadoComponent } from './enviado/enviado.component';
import { PrevisaoComponent } from './previsao/previsao.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlimentacaoService } from '../app/services/alimentacao.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnviadoComponent,
    PrevisaoComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [
    AlimentacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
