import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];

  constructor() {
    this.items = [
      {label: 'Cadastro', icon: 'pi pi-fw pi-users', routerLink:['/cadastro']},
      {label: 'Vendas', icon: 'pi pi-fw pi-money-bill'},
      {label: 'Relatorios', icon: 'pi pi-fw pi-paperclip'},
    ];
  }

  ngOnInit(): void {
  }

}
