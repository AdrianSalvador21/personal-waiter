import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-select',
  templateUrl: './payment-select.page.html',
  styleUrls: ['./payment-select.page.scss'],
})
export class PaymentSelectPage implements OnInit {
  public selectedIndex = 0;
  public paymentTypes = [
    {id: 1, title: 'Efectivo', description: 'Nuestro mesero se acercará a usted. Puede pagar en efectivo y obtener su cambio.'},
    {id: 1, title: 'Tarjeta de crédito o debito', description: 'Nuestro mesero se acercará a usted con terminal de pago.'},
    {id: 1, title: 'Efectivo', description: 'Nuestro mesero se acercará a usted. Puede pagar en efectivo y obtener su cambio.'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
