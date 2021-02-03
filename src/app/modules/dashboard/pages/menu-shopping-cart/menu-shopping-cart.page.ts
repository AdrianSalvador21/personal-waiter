import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-menu-shopping-cart',
  templateUrl: './menu-shopping-cart.page.html',
  styleUrls: ['./menu-shopping-cart.page.scss'],
})
export class MenuShoppingCartPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  goToSelectPayment() {
    this.nav.navigateForward('/payment-select');
  }

}
