import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingInfoPageRoutingModule } from './onboarding-info-routing.module';

import { OnboardingInfoPage } from './onboarding-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingInfoPageRoutingModule
  ],
  declarations: [OnboardingInfoPage]
})
export class OnboardingInfoPageModule {}
