import { Component, OnInit } from '@angular/core';
import {
  StatusBarStyle,
  Device,
  Plugins,
  Capacitor
} from '@capacitor/core';
import {NavController} from '@ionic/angular';

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

  public menuCategories = [
    {image: 'assets/img/example-images/starter1.jpg', label: 'Starters', id: ''},
    {image: 'assets/img/example-images/salad1.jpg', label: 'Salads', id: ''},
    {image: 'assets/img/example-images/soup1.jpg', label: 'Soups', id: ''},
    {image: 'assets/img/example-images/dish1.jpg', label: 'Dish', id: ''},
    {image: 'assets/img/example-images/coffee1.jpg', label: 'Drinks', id: ''},
    {image: 'assets/img/example-images/dessert1.jpg', label: 'Desserts', id: ''}
  ];

  constructor(public nav: NavController) {
    StatusBar.setStyle({
      style: StatusBarStyle.Light
    });

    StatusBar.setBackgroundColor({
      color: '#f0f1f8'
    });
  }

  ngOnInit() {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
  }

  goToDetail(category) {
    this.nav.navigateForward('/menu-detail');
  }

  showOnboarding() {
    this.nav.navigateForward('/onboarding-info');
  }

}
