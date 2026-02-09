import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  age: number;
  location: string;
  bio: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User = {
    name: "San Drex Biore",
    email: "20246263@s.ubaguio.edu",
    age: 23,
    location: "Ucab, Itogon, Benguet",
    bio: "IT Student"
  };
}
