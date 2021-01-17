import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardMenuTabsPage } from './dashboard-menu-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardMenuTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardMenuTabsPageRoutingModule {}
