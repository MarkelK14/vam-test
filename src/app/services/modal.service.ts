import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private vamModalOpen = new BehaviorSubject<boolean>(false);
  
  // Observable para que los componentes se suscriban
  vamModalOpen$ = this.vamModalOpen.asObservable();

  // Abrir el modal VAM
  openVamModal(): void {
    this.vamModalOpen.next(true);
  }

  // Cerrar el modal VAM
  closeVamModal(): void {
    this.vamModalOpen.next(false);
  }

  // Obtener el estado actual del modal
  isVamModalOpen(): boolean {
    return this.vamModalOpen.value;
  }
}