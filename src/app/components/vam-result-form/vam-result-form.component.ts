import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { IVamData } from '../../interfaces/ivam-data.Interface';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-vam-result-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './vam-result-form.component.html',
  styleUrl: './vam-result-form.component.css'
})
export class VamResultFormComponent {
  private modalService = inject(ModalService);
  
  isPaceMode = true;

  @Output() emittedVamData: EventEmitter<IVamData> = new EventEmitter<IVamData>();
  
  readonly INPUT_MODE = {
    PACE: 'pace',
    DISTANCE: 'distance'
  } as const;

  vamForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.vamForm = new FormGroup({
      paceMin: new FormControl(''),
      paceSec: new FormControl(''),
      distance: new FormControl(''),
      hrMax: new FormControl('', [Validators.required, Validators.min(60), Validators.max(220)]),
    });
  }

  getDataFromForm(){

    if (this.isPaceMode){
      const distance = this.getDistanceFromPace(this.vamForm.get('paceMin')?.value, this.vamForm.get('paceSec')?.value);
      this.vamForm.get('distance')?.setValue(distance);
    } else {
      const { paceMin, paceSec } = this.getPaceFromDistance(this.vamForm.get('distance')?.value);
      this.vamForm.get('paceMin')?.setValue(paceMin);
      this.vamForm.get('paceSec')?.setValue(paceSec);
    }

    if (this.vamForm.valid){
      this.emittedVamData.emit({
        paceMin: this.vamForm.get('paceMin')?.value,
        paceSec: this.vamForm.get('paceSec')?.value,
        hrMax: this.vamForm.get('hrMax')?.value,
      });
    } else {
      toast.error('Por favor, completa todos los campos correctamente.');
    }
  }

  toggleToPaceMode(): void {
    this.isPaceMode = true;
    this.vamForm.get('paceMin')?.setValidators([Validators.required, Validators.min(1), Validators.max(20)]);
    this.vamForm.get('paceSec')?.setValidators([Validators.required, Validators.min(0), Validators.max(59)]);
    this.vamForm.get('distance')?.setValidators([]);
    this.vamForm.get('paceMin')?.updateValueAndValidity();
    this.vamForm.get('paceSec')?.updateValueAndValidity();
    this.vamForm.get('distance')?.updateValueAndValidity();
  }

  toggleToDistanceMode(): void {
    this.isPaceMode = false;
    this.vamForm.get('paceMin')?.setValidators([]);
    this.vamForm.get('paceSec')?.setValidators([]);
    this.vamForm.get('distance')?.setValidators([Validators.required, Validators.min(0), Validators.max(10000)]);
    this.vamForm.get('paceMin')?.updateValueAndValidity();
    this.vamForm.get('paceSec')?.updateValueAndValidity();
    this.vamForm.get('distance')?.updateValueAndValidity();
  }

  openVamModal(): void {
    this.modalService.openVamModal();
  }

  getPaceFromDistance(distance: number): { paceMin: number; paceSec: number } {
    const totalMinutes = 5;

    const pace = distance / totalMinutes; // meters per minute
    const pacePerKm = 1000 / pace; // minutes per km

    const paceMin = Math.floor(pacePerKm);
    const paceSec = Math.round((pacePerKm - paceMin) * 60);

    return { paceMin, paceSec };
  }

  getDistanceFromPace(paceMin: number, paceSec: number): number {
    const totalMinutes = 5;

    const pacePerKm = paceMin + paceSec / 60; // minutes per km
    const pace = 1000 / pacePerKm; // meters per minute

    const distance = pace * totalMinutes; // distance in meters in 5 minutes

    return Math.round(distance);
  }
}
