import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DigitalMenuPage } from './digital-menu.page';

describe('DigitalMenuPage', () => {
  let component: DigitalMenuPage;
  let fixture: ComponentFixture<DigitalMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DigitalMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
