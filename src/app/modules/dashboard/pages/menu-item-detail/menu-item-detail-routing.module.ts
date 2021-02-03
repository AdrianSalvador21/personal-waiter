import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuItemDetailPage } from './menu-item-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MenuItemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuItemDetailPageRoutingModule {}
