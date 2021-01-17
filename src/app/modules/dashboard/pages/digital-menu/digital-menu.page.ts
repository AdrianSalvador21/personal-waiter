import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
