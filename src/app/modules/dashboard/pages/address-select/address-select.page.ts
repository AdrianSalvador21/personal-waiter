import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {GoogleAutocompleteService} from '../../../../core/providers/googleAutocomplete.service';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {SetFormattedAddressAction} from "../../../../core/actions/user.action";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../app.reducer";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-address-select',
  templateUrl: './address-select.page.html',
  styleUrls: ['./address-select.page.scss'],
})
export class AddressSelectPage implements OnInit, OnDestroy {
  public cdRefInterval;
  public formattedAddress = '';
  public showMap = false;
  constructor(public googleAC: GoogleAutocompleteService,
              private cdRef: ChangeDetectorRef,
              public loading: LoadingController,
              public bottomSheetRef: MatBottomSheet,
              private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('user').subscribe(state => {
      this.formattedAddress = state.formattedAddress;
    });

    this.cdRef.detach();
    this.cdRefInterval = setInterval(() => {
      this.cdRef.reattach();
      this.cdRef.detectChanges();
      this.cdRef.detach();
    }, 100);
  }

  ngOnDestroy() {
    clearInterval(this.cdRefInterval);
  }

  async searchAddress(event) {
    if (!!event && !!event.detail.value) {
      await this.googleAC.getPredictions(event.detail.value);
    } else {
      this.googleAC.autocompleteOptions = [];
    }
  }

  closeDialog() {
    this.googleAC.autocompleteOptions = [];
    this.bottomSheetRef.dismiss();
  }

  setUserAddress(formattedAddress) {
    const setFormattedAction = new SetFormattedAddressAction({
      formattedAddress
    });
    this.store.dispatch(setFormattedAction);
  }

  async initMap() {
    this.showMap = true;
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    console.log(loading);
    await loading.present();
    setTimeout(() => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 19.420842547789384, lng: -99.03144385734696 },
        zoom: 16,
      });

      const marker1 = new google.maps.Marker({
        map,
        draggable: true,
        position: { lat: 19.420842547789384, lng: -99.03144385734696 },
        animation: google.maps.Animation.DROP
      });

      this.showInfo(19.420842547789384, -99.03144385734696);
      google.maps.event.addListener(marker1, 'dragend', (a) => {
        this.showInfo(marker1.getPosition().lat(), marker1.getPosition().lng());
      });

      loading.dismiss();
    }, 500);
  }

  showInfo(lat: number, lng: number) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({location: {lat, lng}}, (results, status) => {
      const setFormattedAction = new SetFormattedAddressAction({
        formattedAddress: results[0].formatted_address
      });
      this.store.dispatch(setFormattedAction);
    });
  }

}
