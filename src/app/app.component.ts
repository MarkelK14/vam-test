import { Component, Input, Output, output } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { VamResultFormComponent } from "./components/vam-result-form/vam-result-form.component";
import { VamInfoModalComponent } from "./components/vam-info-modal/vam-info-modal.component";
import { initFlowbite } from 'flowbite';
import { IVamData } from './interfaces/ivam-data.Interface';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { PaceZonesComponent } from './components/pace-zones/pace-zones.component';
import { HeartRateZonesComponent } from './components/heart-rate-zones/heart-rate-zones.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, VamResultFormComponent, PaceZonesComponent, HeartRateZonesComponent, VamInfoModalComponent, FooterComponent, NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'vam-test';
  protected readonly toast = toast;

  vamData: IVamData = {
    paceMin: null,
    paceSec: null,
    hrMax: null,
  };

  ngOnInit(): void {
    initFlowbite();
  }

  getVamData(event: IVamData) {
    this.vamData = event;
  }
}