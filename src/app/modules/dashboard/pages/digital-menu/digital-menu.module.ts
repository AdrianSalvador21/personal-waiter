import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalMenuPageRoutingModule } from './digital-menu-routing.module';

import { DigitalMenuPage } from './digital-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalMenuPageRoutingModule
  ],
  declarations: [DigitalMenuPage]
})
export class DigitalMenuPageModule {}
