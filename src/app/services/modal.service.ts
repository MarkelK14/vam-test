import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private vamModalOpen = new BehaviorSubject<boolean>(false);
  
  // Observable for components to subscribe to
  vamModalOpen$ = this.vamModalOpen.asObservable();

  // Open VAM modal
  openVamModal(): void {
    this.vamModalOpen.next(true);
  }

  // Close VAM modal
  closeVamModal(): void {
    this.vamModalOpen.next(false);
  }

  // Get current modal state
  isVamModalOpen(): boolean {
    return this.vamModalOpen.value;
  }
}