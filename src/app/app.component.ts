import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero/hero.component";
import { VamResultFormComponent } from "./components/vam-result-form/vam-result-form.component";
import { VamInfoModalComponent } from "./components/vam-info-modal/vam-info-modal.component";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, VamResultFormComponent, VamInfoModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vam-test';

  ngOnInit(): void {
    initFlowbite();
  }
}
