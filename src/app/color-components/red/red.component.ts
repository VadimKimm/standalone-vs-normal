import { Component } from '@angular/core';
import { FirstModule } from '../../modules/first/first.module';

@Component({
  selector: 'app-red',
  standalone: true,
  imports: [FirstModule],
  templateUrl: './red.component.html',
  styleUrl: './red.component.css'
})
export class RedComponent {

}
