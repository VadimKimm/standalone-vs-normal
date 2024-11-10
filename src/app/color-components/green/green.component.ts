import { Component } from '@angular/core';
import { RedComponent } from '../red/red.component';

@Component({
  selector: 'app-green',
  standalone: true,
  imports: [RedComponent],
  templateUrl: './green.component.html',
  styleUrl: './green.component.css'
})
export class GreenComponent {

}
