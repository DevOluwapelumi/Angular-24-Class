import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LandingpageService } from '../services/landingpage.service';
import { Subscription } from 'rxjs';

declare var bootstrap: any;

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule, FormsModule, LandingPageComponent],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent implements OnInit {
  selectedContact: any;
  private subscription: Subscription = new Subscription;
  // @Input() selectedContact: any;
  @Output() contactUpdated = new EventEmitter<any>();
  @Input() selectedIndex: number | null = null;

  constructor(private route: ActivatedRoute, private landingpageService: LandingpageService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let contactId = params.get('id');
      if (contactId !== null) {
        // this.fetchContact(parseInt(contactId, 10));
      }
    });
  }
  
  }
  



  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     let contactId = params.get('id');
  //     if (contactId !== null) {
  //       const index = parseInt(contactId, 10);
  //       const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  //       this.selectedContact = contacts[index];
  //     }
  //   });
  // }
// edit(updatedContact: any) {
//   if (this.selectedIndex !== null) {
//     const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
//     contacts[this.selectedIndex] = updatedContact;
//     localStorage.setItem('contacts', JSON.stringify(contacts));

//     // Optionally, emit an event to notify the parent component to update its contact array
//     this.contactUpdated.emit(contacts);
//   }
// }
//   updateContact() {
//     this.contactUpdated.emit(this.selectedContact);
//     // Implement the logic to update the contact information
//     // For example, you might want to emit an event to the parent component to update the contact array
//     // ...

//     // Close the modal after updating
//     const editModal = new bootstrap.Modal(document.getElementById('editContactModal'));
//     editModal.hide();
//   }
//   closeModal() {
//     // Using Bootstrap's modal JavaScript API to hide the modal
//     const modalElement = document.getElementById('yourModalId');
//     const modal = new bootstrap.Modal(modalElement);
//     modal.hide();
//   }
// }
