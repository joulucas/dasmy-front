import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})


export class VendasComponent implements OnInit {

  countries: Country[];
  selectedCountries: Country[];

  peca: Peca[];
  selectedPeca: Peca[];

  formaPagamento: FormaPagamento[];
  selectedformaPagamento: FormaPagamento[];

  constructor() {

    this.countries = [
      {name: 'Vendedora 1'},
      {name: 'Vendedora 2', },
      {name: 'Joubert', }
    ];

    this.peca = [
      {name: 'Roupa 1', valor: 10},
      {name: 'Roupa 2', valor: 100},
      {name: 'Roupa 3', valor: 100}
    ]

    this.formaPagamento = [
      {name: 'Dinheiro'},
      {name: 'Cartão' },
      {name: 'Pix' }
    ]
  }

  ngOnInit(): void {
  }

}

interface Country {
  name: string,
}
interface Peca {
  name: string,
  valor: number
}
interface FormaPagamento {
  name: string,
}

