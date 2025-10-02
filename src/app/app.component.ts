import { Component, Input, Output, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero/hero.component";
import { VamResultFormComponent } from "./components/vam-result-form/vam-result-form.component";
import { VamInfoModalComponent } from "./components/vam-info-modal/vam-info-modal.component";
import { initFlowbite } from 'flowbite';
import { IVamData } from './interfaces/ivam-data.Interface';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, VamResultFormComponent, VamInfoModalComponent, NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'vam-test';
  protected readonly toast = toast;

  @Input() vamData: IVamData = {
    paceMin: null,
    paceSec: null,
    hrMax: null,
  };

  zonesByPace = [
    { zone: 1, percMin: 65, percMax: 75, paceMin: null, paceMax: null },
    { zone: 2, percMin: 76, percMax: 85, paceMin: null, paceMax: null },
    { zone: 3, percMin: 86, percMax: 90, paceMin: null, paceMax: null },
    { zone: 4, percMin: 91, percMax: 95, paceMin: null, paceMax: null },
    { zone: 5, percMin: 96, percMax: 100, paceMin: null, paceMax: null },
  ];
  zonesByHr = [
    { zone: 1, percMin: 65, percMax: 75, hrMin: 123, hrMax: 142 },
    { zone: 2, percMin: 76, percMax: 85, hrMin: 143, hrMax: 161 },
    { zone: 3, percMin: 86, percMax: 90, hrMin: 162, hrMax: 171 },
    { zone: 4, percMin: 91, percMax: 95, hrMin: 172, hrMax: 180 },
    { zone: 5, percMin: 96, percMax: 100, hrMin: 181, hrMax: 190 },
  ];

  ngOnInit(): void {
    initFlowbite();
  }

  getVamData(event: IVamData) {
    this.vamData = event;
  }
}
