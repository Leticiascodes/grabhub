import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EnviadoComponent } from './enviado/enviado.component';
import { PrevisaoComponent } from './previsao/previsao.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'enviado', component: EnviadoComponent },
    { path: 'previsao', component: PrevisaoComponent },
    { path: 'relatorio', component: RelatorioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule { }