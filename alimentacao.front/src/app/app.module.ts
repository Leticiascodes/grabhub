import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnviadoComponent } from './enviado/enviado.component';
import { PrevisaoComponent } from './previsao/previsao.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

import { AppRoutingModule } from './app.routing.module';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
