import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard-menu-tabs',
    pathMatch: 'full'
  },
  {
    path: 'dashboard-menu-tabs',
    loadChildren: () => import('./modules/dashboard/pages/dashboard-menu-tabs/dashboard-menu-tabs.module').then( m => m.DashboardMenuTabsPageModule)
  },
  {
    path: 'digital-menu',
    loadChildren: () => import('./modules/dashboard/pages/digital-menu/digital-menu.module').then( m => m.DigitalMenuPageModule)
  },
  {
    path: 'menu-detail',
    loadChildren: () => import('./modules/dashboard/pages/menu-detail/menu-detail.module').then( m => m.MenuDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
