import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {TabMenuModule} from "primeng/tabmenu";
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent
  ],
    imports: [
        BrowserModule,
        TabMenuModule,
        RouterModule.forRoot([
        {path:'',component: AppComponent},
      ]),
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
