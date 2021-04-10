import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressSelectPageRoutingModule } from './address-select-routing.module';

import { AddressSelectPage } from './address-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressSelectPageRoutingModule
  ],
  declarations: [AddressSelectPage]
})
export class AddressSelectPageModule {}
