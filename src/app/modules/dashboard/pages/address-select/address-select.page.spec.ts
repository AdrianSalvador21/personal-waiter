import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddressSelectPage } from './address-select.page';

describe('AddressSelectPage', () => {
  let component: AddressSelectPage;
  let fixture: ComponentFixture<AddressSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
