import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import {StatusBarStyle, Plugins, Capacitor} from '@capacitor/core';
import {NavController} from '@ionic/angular';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {AddressSelectPage} from '../address-select/address-select.page';
import {AppState} from '../../../../app.reducer';
import {Store} from '@ngrx/store';
import {SetFormattedAddressAction} from '../../../../core/actions/user.action';
import {MenuItemDetailPage} from "../menu-item-detail/menu-item-detail.page";

const { StatusBar, Filesystem, Geolocation } = Plugins;
if (Capacitor.isPluginAvailable('StatusBar')) {
  StatusBar.show();
}

@Component({
  selector: 'app-digital-menu',
  templateUrl: './digital-menu.page.html',
  styleUrls: ['./digital-menu.page.scss'],
})
export class DigitalMenuPage implements OnInit {
  public example1 = 'assets/img/example-images/cocktail1.jpg';
  public example2 = 'assets/img/example-images/coffee1.jpg';
  public formattedAddress = 'Dirección de envío';

  public menuCategories = [
    {image: 'assets/img/example-images/starter1.jpg', label: 'Starters', id: ''},
    {image: 'assets/img/example-images/salad1.jpg', label: 'Salads', id: ''},
    {image: 'assets/img/example-images/soup1.jpg', label: 'Soups', id: ''},
    {image: 'assets/img/example-images/dish1.jpg', label: 'Dish', id: ''},
    {image: 'assets/img/example-images/coffee1.jpg', label: 'Drinks', id: ''},
    {image: 'assets/img/example-images/dessert1.jpg', label: 'Desserts', id: ''}
  ];

  public menuSimpleCategories = [
    {image: '/assets/img/categories/004-salad-3.png', label: 'Salad', id: ''},
    {image: '/assets/img/categories/013-spaghetti.png', label: 'Spaghetti', id: ''},
    {image: '/assets/img/categories/016-pizza-slice.png', label: 'Pizza', id: ''},
    {image: '/assets/img/categories/017-ramen.png', label: 'Ramen', id: ''},
    {image: '/assets/img/categories/022-burger.png', label: 'Burgers', id: ''},
    {image: '/assets/img/categories/030-tofu.png', label: 'Tofu', id: ''},
    {image: '/assets/img/categories/035-guacamole.png', label: 'Mexican Food', id: ''},
    {image: '/assets/img/categories/043-pudding.png', label: 'Desserts', id: ''},
    {image: '/assets/img/categories/050-dinner.png', label: 'Dinner', id: ''}
  ];

  menuData = [
    {name: 'Beef steak medium rare', offer: 20, image: 'assets/img/example-images/starter1.jpg', price: 500, favorite: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis dignissimos.', minTime: 10, maxTime: 20},
    {name: 'Beef steak medium rare', offer: 0, image: 'assets/img/example-images/salad1.jpg', price: 500, favorite: false, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis dignissimos.', minTime: 10, maxTime: 20},
    {name: 'Beef steak medium rare', offer: 15, image: 'assets/img/example-images/dish1.jpg', price: 500, favorite: false, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis dignissimos.', minTime: 10, maxTime: 20},
    {name: 'Beef steak medium rare', offer: 0, image: 'assets/img/example-images/soup1.jpg', price: 500, favorite: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis dignissimos.', minTime: 10, maxTime: 20}
  ];

  constructor(public nav: NavController, public changeDetectorRef: ChangeDetectorRef, private bottomSheet: MatBottomSheet, private store: Store<AppState>) {
    this.getCurrentPosition();
    StatusBar.setStyle({
      style: StatusBarStyle.Light
    });

    StatusBar.setBackgroundColor({
      color: '#f0f1f8'
    });
  }

  ngOnInit() {
    this.store.select('user').subscribe(state => {
      console.log(state);
      this.formattedAddress = state.formattedAddress;
    });
    // this.watchPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    });
    console.log('Current', coordinates.coords);
    this.getAddress(coordinates.coords.latitude, coordinates.coords.longitude);
  }

  getAddress(latitude, longitude) {
    // tslint:disable-next-line:new-parens
    const geocoder = new google.maps.Geocoder();
    const latlng = {lat: latitude, lng: longitude};
    geocoder.geocode({location: latlng}, (results, status) => {
      console.log(results); // read data from here
      console.log(status);
      this.setAddress(results[0]);
    });
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({enableHighAccuracy: true}, (position, err) => {
      this.getAddress(position.coords.latitude, position.coords.longitude);
    });
  }

  goToDetail(category) {
    this.nav.navigateForward('/menu-detail');
  }

  goToCategories() {
    this.nav.navigateForward('/all-categories');
  }

  showOnboarding() {
    this.nav.navigateForward('/onboarding-info');
  }

  setAddress(data) {
    const setFormattedAction = new SetFormattedAddressAction({
      formattedAddress: data.formatted_address
    });
    this.store.dispatch(setFormattedAction);
    this.changeDetectorRef.detectChanges();
  }

  openAddressSelect() {
    const w = window.innerWidth;
    const dw = w < 992 ? '80vw' : '60vw';
    const button = this.bottomSheet.open(AddressSelectPage, {
      data: {}
    });
  }

  openMenuItemDetails(menuItem) {
    const w = window.innerWidth;
    const dw = w < 992 ? '80vw' : '60vw';
    const button = this.bottomSheet.open(MenuItemDetailPage, {
      data: {menuItem}
    });
  }
}
