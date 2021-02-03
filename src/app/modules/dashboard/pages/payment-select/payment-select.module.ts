import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentSelectPageRoutingModule } from './payment-select-routing.module';

import { PaymentSelectPage } from './payment-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentSelectPageRoutingModule
  ],
  declarations: [PaymentSelectPage]
})
export class PaymentSelectPageModule {}
