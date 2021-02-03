import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuShoppingCartPage } from './menu-shopping-cart.page';

const routes: Routes = [
  {
    path: '',
    component: MenuShoppingCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuShoppingCartPageRoutingModule {}
