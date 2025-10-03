import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // Get current year for copyright notice
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
