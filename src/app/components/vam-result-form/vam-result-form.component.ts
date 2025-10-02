import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { IVamData } from '../../interfaces/ivam-data.Interface';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-vam-result-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxSonnerToaster],
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
      hrMax: new FormControl('')
    });
  }

  getDataFromForm(){
    if (this.vamForm.valid){
      this.emittedVamData.emit({
        paceMin: this.vamForm.get('paceMin')?.value,
        paceSec: this.vamForm.get('paceSec')?.value,
        hrMax: this.vamForm.get('hrMax')?.value,
      });
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
}
