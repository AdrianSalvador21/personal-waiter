import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";
import {MenuItemDetailPage} from "../menu-item-detail/menu-item-detail.page";
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
})
export class MenuDetailPage implements OnInit {
  backdropVisible = false;
  selectedSubcategory = 0;
  winX = null;
  winY = null;
  menuData = [
    {name: 'Beef steak medium rare', offer: 20, image: 'assets/img/example-images/starter1.jpg', price: 500, favorite: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis dignissimos.', minTime: 10, maxTime: 20},
    {name: 'Beef steak medium rare', offer: 0, image: 'assets/img/example-images/salad1.jpg', price: 500, favorite: false, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis dignissimos.', minTime: 10, maxTime: 20},
    {name: 'Beef steak medium rare', offer: 15, image: 'assets/img/example-images/dish1.jpg', price: 500, favorite: false, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis dignissimos.', minTime: 10, maxTime: 20},
    {name: 'Beef steak medium rare', offer: 0, image: 'assets/img/example-images/soup1.jpg', price: 500, favorite: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis dignissimos.', minTime: 10, maxTime: 20},
    {name: 'Beef steak medium rare', offer: 0, image: 'assets/img/example-images/soup1.jpg', price: 500, favorite: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis dignissimos.', minTime: 10, maxTime: 20},
    {name: 'Beef steak medium rare', offer: 0, image: 'assets/img/example-images/soup1.jpg', price: 500, favorite: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis dignissimos.', minTime: 10, maxTime: 20},
    {name: 'Beef steak medium rare', offer: 0, image: 'assets/img/example-images/soup1.jpg', price: 500, favorite: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis dignissimos.', minTime: 10, maxTime: 20}
  ];

  menuSubcategories = [
    {label: 'Promociones', id: 0},
    {label: 'Menú', id: 1},
    {label: 'Extras', id: 2},
    {label: 'Bebidas', id: 3},
    {label: 'Postres', id: 4},
    {label: 'Combos', id: 5},
    {label: 'Cervezas', id: 6}
  ];

  constructor(public nav: NavController, private changeDetectorRef: ChangeDetectorRef, public modalCtrl: ModalController, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      if (this.winX !== null && this.winY !== null) {
        window.scrollTo(this.winX, this.winY);
      }
    });

    this.disableWindowScroll();
  }

  async menuItemDetail(menuItem) {
    // this.nav.navigateForward('/menu-item-detail');
    const modal = await this.modalCtrl.create({
      component: MenuItemDetailPage,
      componentProps: {
        nombre: 'Fernando',
        pais: 'Costa Rica'
      }
    });

    await modal.present();
  }

  toggleBackdrop(isVisible) {
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges();
  }

  disableWindowScroll() {
    this.winX = window.scrollX;
    this.winY = window.scrollY;
  }

  enableWindowScroll() {
    this.winX = null;
    this.winY = null;
  }

  openMenuItemDetails(menuItem) {
    const w = window.innerWidth;
    const dw = w < 992 ? '80vw' : '60vw';
    const button = this.bottomSheet.open(MenuItemDetailPage, {
      data: {menuItem}
    });
  }

  goToCart() {
    this.nav.navigateForward('/menu-shopping-cart');
  }

}
