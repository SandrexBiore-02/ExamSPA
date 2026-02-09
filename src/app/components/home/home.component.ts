import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = "Biore's Angular SPA Project";
  description: string = "This is a SPA built with Angular and Bootstrap and of course with AI.";
  welcomeMessage: string = "Welcome to the SPA!";
  year: number = new Date().getFullYear();
  isActive: boolean = true;
}
