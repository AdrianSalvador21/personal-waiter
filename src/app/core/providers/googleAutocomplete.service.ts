import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAutocompleteService {
  public autocompleteService;
  public autocompleteOptions = [];

  constructor() {
    this.autocompleteService = new google.maps.places.AutocompleteService();
  }

  public async getPredictions(value) {
    await this.autocompleteService.getPlacePredictions({
      input: value,
      componentRestrictions: {country: 'MX'},
      types: ['geocode']
    }, async (a, b) => {
      if (b === 'OK') {
        this.autocompleteOptions = a;
        console.log(this.autocompleteOptions);
      }
    });
  }
}
