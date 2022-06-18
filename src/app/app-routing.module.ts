import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CadastroComponent} from "./pages/cadastro/cadastro.component";
import {VendasComponent} from "./pages/vendas/vendas.component";
import {RelatoriosComponent} from "./pages/relatorios/relatorios.component";

const routes: Routes = [
  {path: 'cadastro', component: CadastroComponent},
  {path: 'vendas', component: VendasComponent},
  {path: 'relatorios', component: RelatoriosComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
