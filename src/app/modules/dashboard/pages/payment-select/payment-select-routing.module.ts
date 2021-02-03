import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentSelectPage } from './payment-select.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentSelectPageRoutingModule {}
