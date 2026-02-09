import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 title: string = "Angular SPA Project";
  year: number = 2026;
  isActive: boolean = true;

}
