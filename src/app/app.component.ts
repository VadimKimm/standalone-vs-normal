import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FirstModule } from "./modules/first/first.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 

    FirstModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standalone-vs-normal';
}