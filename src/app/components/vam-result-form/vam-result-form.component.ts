import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-vam-result-form',
  imports: [CommonModule],
  templateUrl: './vam-result-form.component.html',
  styleUrl: './vam-result-form.component.css'
})
export class VamResultFormComponent {
  private modalService = inject(ModalService);
  
  isPaceMode = true;
  
  readonly INPUT_MODE = {
    PACE: 'pace',
    DISTANCE: 'distance'
  } as const;

  toggleToPaceMode(): void {
    this.isPaceMode = true;
    console.log('Modo seleccionado:', this.getSelectedMode());
  }

  toggleToDistanceMode(): void {
    this.isPaceMode = false;
    console.log('Modo seleccionado:', this.getSelectedMode());
  }

  getSelectedMode(): string {
    return this.isPaceMode ? this.INPUT_MODE.PACE : this.INPUT_MODE.DISTANCE;
  }

  isInPaceMode(): boolean {
    return this.isPaceMode;
  }

  isInDistanceMode(): boolean {
    return !this.isPaceMode;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    
    const selectedMode = this.getSelectedMode();
    console.log('Procesando formulario en modo:', selectedMode);
    
    if (selectedMode === this.INPUT_MODE.PACE) {
      this.processPaceMode();
    } else {
      this.processDistanceMode();
    }
  }

  private processPaceMode(): void {
    console.log('Processing data in PACE mode');
  }

  private processDistanceMode(): void {
    console.log('Processing data in DISTANCE mode');
  }

  openVamModal(): void {
    this.modalService.openVamModal();
  }
}
