import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDetailPageRoutingModule } from './menu-detail-routing.module';

import { MenuDetailPage } from './menu-detail.page';
import {MatChipsModule} from "@angular/material/chips";
import {MenuItemDetailPageModule} from "../menu-item-detail/menu-item-detail.module";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDetailPageRoutingModule,
    MatChipsModule,
    MenuItemDetailPageModule,
    MatBottomSheetModule
  ],
  declarations: [MenuDetailPage]
})
export class MenuDetailPageModule {}
