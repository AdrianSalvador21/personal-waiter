import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DigitalMenuPageRoutingModule } from './digital-menu-routing.module';

import { DigitalMenuPage } from './digital-menu.page';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalMenuPageRoutingModule,
    MatBottomSheetModule
  ],
  declarations: [DigitalMenuPage]
})
export class DigitalMenuPageModule {}
