import {
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  StatusBarStyle,
  Device,
  Plugins,
  Capacitor
} from '@capacitor/core';
import {GestureController, ModalController, Platform} from "@ionic/angular";
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheet} from "@angular/material/bottom-sheet";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

const { StatusBar, Filesystem } = Plugins;
if (Capacitor.isPluginAvailable('StatusBar')) {
  StatusBar.show();
}

@Component({
  selector: 'app-menu-item-detail',
  templateUrl: './menu-item-detail.page.html',
  styleUrls: ['./menu-item-detail.page.scss'],
})
export class MenuItemDetailPage implements OnInit, AfterViewChecked {
  @ViewChild('drawer', {read: ElementRef}) drawer: ElementRef;
  // @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() openState: EventEmitter<boolean> = new EventEmitter<boolean>();
  public menuItem;
  isOpen = false;
  openHeight = 0;
  isScrolled = false;
  ejeY = 0;

  constructor(public modalCtrl: ModalController,
              private plt: Platform,
              private gestureCtrl: GestureController,
              public cdRef: ChangeDetectorRef,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
              public bottomSheetRef: MatBottomSheet) {
    console.log(this.data);
    this.menuItem = this.data.menuItem;
  }

  async ngOnInit() {
    window.addEventListener('scroll', (e) => {
      this.onScroll(e, this);
    }, true);
    const info = await Device.getInfo();

    if (info.platform !== 'web') {
      StatusBar.setOverlaysWebView({
        overlay: true
      });
    }
  }

  ngAfterViewChecked(): void {
    console.log(localStorage.getItem('scrollNumber'));
  }

  /* async ngAfterViewInit() {
    const drawer = this.drawer.nativeElement;
    this.openHeight = (this.plt.height() / 100) * 70;

    const gesture = await this.gestureCtrl.create({
      el: drawer,
      gestureName: 'swipe',
      direction: 'y',
      onMove: ev => {
        console.log(ev);
        if (ev.deltaY < -this.openHeight) {
          return;
        }
        drawer.style.transform = `translateY(${ev.deltaY}px)`;
      },
      onEnd: ev => {
        if (ev.deltaY < -50 && !this.isOpen) {
          drawer.style.transition = '.4s ease-out';
          drawer.style.transform = `translateY(${-this.openHeight}px)`;
          this.openState.emit(true);
        } else if (ev.deltaY > 50 && this.isOpen) {
          drawer.style.transition = '.4s ease-out';
          drawer.style.transform = '';
          this.openState.emit(false);
          this.isOpen = false;
        }
        console.log(ev);
      }
    });

    gesture.enable(true);
  } */

  closeModal() {
    this.modalCtrl.dismiss();
  }

  toggleDrawer() {
    const drawer = this.drawer.nativeElement;
    this.openState.emit(!this.isOpen);
    if (this.isOpen) {
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = '';
      this.isOpen = false;
    } else {
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = `translateY(${-this.openHeight}px)`;
      this.isOpen = true;
    }
  }

  onScroll(e, reference) {
    console.log('referennce', reference);
    const y = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
    console.log(e.srcElement.scrollTop);
    reference.isScrolled = e.srcElement.scrollTop >= 72;
    localStorage.setItem('scrollNumber', e.srcElement.scrollTop);
    this.cdRef.markForCheck();
  }

  addToCard() {
    this.bottomSheetRef.dismiss();
  }

}
