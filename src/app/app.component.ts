import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FirstModule } from "./modules/first/first.module";
import { SecondModule } from './modules/second/second.module';
import { GreenComponent } from './color-components/green/green.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 

    FirstModule, 
    SecondModule,

    GreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standalone-vs-normal';
}

// ng update @angular/core@18 @angular/cli@18