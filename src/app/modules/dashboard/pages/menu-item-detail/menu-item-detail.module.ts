import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuItemDetailPageRoutingModule } from './menu-item-detail-routing.module';

import { MenuItemDetailPage } from './menu-item-detail.page';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuItemDetailPageRoutingModule,
    MatDialogModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [MenuItemDetailPage],
  exports: [
    MenuItemDetailPage
  ]
})
export class MenuItemDetailPageModule {}
