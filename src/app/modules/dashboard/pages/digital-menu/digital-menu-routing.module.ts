import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalMenuPage } from './digital-menu.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalMenuPageRoutingModule {}
