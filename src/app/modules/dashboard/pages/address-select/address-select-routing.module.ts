import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressSelectPage } from './address-select.page';

const routes: Routes = [
  {
    path: '',
    component: AddressSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressSelectPageRoutingModule {}
