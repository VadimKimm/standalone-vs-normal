import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { GreenComponent } from '../../color-components/green/green.component';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    GreenComponent
  ],
  exports: [
    FirstComponent    
  ]
})
export class FirstModule { }
