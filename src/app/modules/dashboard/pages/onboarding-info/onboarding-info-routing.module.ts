import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingInfoPage } from './onboarding-info.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingInfoPageRoutingModule {}
