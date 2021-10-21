import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.page.html',
  styleUrls: ['./all-categories.page.scss'],
})
export class AllCategoriesPage implements OnInit {
  public menuCategories = [
    {image: 'assets/img/example-images/starter1.jpg', label: 'Starters', id: ''},
    {image: 'assets/img/example-images/salad1.jpg', label: 'Salads', id: ''},
    {image: 'assets/img/example-images/soup1.jpg', label: 'Soups', id: ''},
    {image: 'assets/img/example-images/dish1.jpg', label: 'Dish', id: ''},
    {image: 'assets/img/example-images/coffee1.jpg', label: 'Drinks', id: ''},
    {image: 'assets/img/example-images/dessert1.jpg', label: 'Desserts', id: ''},
    {image: 'assets/img/example-images/starter1.jpg', label: 'Starters', id: ''},
    {image: 'assets/img/example-images/salad1.jpg', label: 'Salads', id: ''}
  ];

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  goToDetail(category) {
    this.nav.navigateForward('/menu-detail');
  }

}
