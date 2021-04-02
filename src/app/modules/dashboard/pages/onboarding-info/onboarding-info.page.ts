import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-onboarding-info',
  templateUrl: './onboarding-info.page.html',
  styleUrls: ['./onboarding-info.page.scss'],
})
export class OnboardingInfoPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }

  closeOnboarding() {
    this.nav.pop();
  }

}
