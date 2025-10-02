import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-vam-info-modal',
  imports: [CommonModule],
  templateUrl: './vam-info-modal.component.html',
  styleUrl: './vam-info-modal.component.css'
})
export class VamInfoModalComponent implements OnInit, OnDestroy {
  private modalService = inject(ModalService);
  private subscription: Subscription | null = null;
  
  isModalOpen = false;

  ngOnInit(): void {
    this.subscription = this.modalService.vamModalOpen$.subscribe(
      (isOpen) => {
        this.isModalOpen = isOpen;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  closeModal(): void {
    this.modalService.closeVamModal();
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
