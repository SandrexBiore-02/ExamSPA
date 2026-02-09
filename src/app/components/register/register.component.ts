import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  age: number | null = null;
  dob: string = '';
  country: string = '';
  gender: string = '';
  accountType: string = '';
  terms: boolean = false;

  submitForm() {
    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      password: this.password,
      age: this.age,
      dob: this.dob,
      country: this.country,
      gender: this.gender,
      accountType: this.accountType,
      terms: this.terms
    });
    alert("Form submitted! Check console for details.");
  }
}
