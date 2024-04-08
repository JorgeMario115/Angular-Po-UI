import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  PoButtonModule,
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    PoButtonModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home',
      action: this.onClick.bind(this),
      shortLabel:'Home',
      icon:'po-icon po-icon-home'
    },
    { label: 'Produtos',
      shortLabel:'Produtos',
      icon:'po-icon po-icon-pushcart',
      subItems: [
        {
          label:'Estoque',
        },
        {
          label:'Garantia'
          
        }
      ]
    },
    { label: 'Vendas',
      action: this.onClick.bind(this),
      shortLabel:'Vendas',
      icon:'po-icon po-icon-sale'
    },
    { label: 'Financeiro',
      action: this.onClick.bind(this),
      shortLabel:'Financeiro',
      icon:'po-icon po-icon-money'
     },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
