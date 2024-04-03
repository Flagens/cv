import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(private http: HttpClient) { }

  onSubmit() {
    if (this.isValidEmail(this.contactForm.email)) {
      this.http.post('/api/contact', this.contactForm)
        .subscribe(
          response => console.log('Success!', response),
          error => console.error('Error!', error)
        );
    } else {
      console.error('Invalid email');
    }
  }

  isValidEmail(email: string): boolean {
    return this.emailRegex.test(email);
  }
}
