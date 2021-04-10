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
  },
  {
    path: 'menu-item-detail',
    loadChildren: () => import('./modules/dashboard/pages/menu-item-detail/menu-item-detail.module').then( m => m.MenuItemDetailPageModule)
  },
  {
    path: 'menu-shopping-cart',
    loadChildren: () => import('./modules/dashboard/pages/menu-shopping-cart/menu-shopping-cart.module').then( m => m.MenuShoppingCartPageModule)
  },
  {
    path: 'payment-select',
    loadChildren: () => import('./modules/dashboard/pages/payment-select/payment-select.module').then( m => m.PaymentSelectPageModule)
  },
  {
    path: 'onboarding-info',
    loadChildren: () => import('./modules/dashboard/pages/onboarding-info/onboarding-info.module').then( m => m.OnboardingInfoPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./modules/security/pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/security/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/security/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'address-select',
    loadChildren: () => import('./modules/dashboard/pages/address-select/address-select.module').then( m => m.AddressSelectPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
