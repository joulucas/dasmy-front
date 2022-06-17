import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './scr/app/pages/home/home.component';
import {TabMenuModule} from "primeng/tabmenu";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        TabMenuModule,
        RouterModule.forRoot([
        {path:'',component: AppComponent},
      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
