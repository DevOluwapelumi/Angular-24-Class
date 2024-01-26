import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';

declare var bootstrap: any;

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule, FormsModule, LandingPageComponent],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {
  @Input() selectedContact: any;
  @Output() contactUpdated = new EventEmitter<any>();
  @Input() selectedIndex: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let contactId = params.get('id');
      if (contactId !== null) {
        const index = parseInt(contactId, 10);
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        this.selectedContact = contacts[index];
      }
    });
  }
edit(updatedContact: any) {
  if (this.selectedIndex !== null) {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts[this.selectedIndex] = updatedContact;
    localStorage.setItem('contacts', JSON.stringify(contacts));

    // Optionally, emit an event to notify the parent component to update its contact array
    this.contactUpdated.emit(contacts);
  }
}
  updateContact() {
    this.contactUpdated.emit(this.selectedContact);
    // Implement the logic to update the contact information
    // For example, you might want to emit an event to the parent component to update the contact array
    // ...

    // Close the modal after updating
    const editModal = new bootstrap.Modal(document.getElementById('editContactModal'));
    editModal.hide();
  }
  closeModal() {
    // Using Bootstrap's modal JavaScript API to hide the modal
    const modalElement = document.getElementById('yourModalId');
    const modal = new bootstrap.Modal(modalElement);
    modal.hide();
  }
}