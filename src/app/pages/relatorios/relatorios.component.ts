import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  data:any;

  constructor() {
    this.data = {
      labels: ['Janeiro', 'Fevereiro', 'Março','Abril','Maio',
        'Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro',],
      datasets: [
        {
          backgroundColor: '#42A5F5',
          label: 'Vendas',
          data: [10000, 7000,4000,700,3000,8000,7000,5000,11000,6000,9000,12000,]
        },
      ]
    }
  }

  ngOnInit(): void {
  }

  update(event: Event) {
    this.data = null;
  }


}
