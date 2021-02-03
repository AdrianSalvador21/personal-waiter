import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuShoppingCartPageRoutingModule } from './menu-shopping-cart-routing.module';

import { MenuShoppingCartPage } from './menu-shopping-cart.page';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuShoppingCartPageRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [MenuShoppingCartPage]
})
export class MenuShoppingCartPageModule {}
