import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {TabMenuModule} from "primeng/tabmenu";
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AppRoutingModule } from './app-routing.module';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { VendasComponent } from './pages/vendas/vendas.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule} from "@angular/forms";
import {ChartModule} from "primeng/chart";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    VendasComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    CardModule,
    ButtonModule,
    ListboxModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
    ]),
    AppRoutingModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
