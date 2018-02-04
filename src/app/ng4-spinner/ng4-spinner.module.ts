import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng4SpinnerComponent } from './ng4-spinner.component';
import { Ng4SpinnerService } from './ng4-spinner.service';
import { Ng4DefaultSpinnerComponent } from '../ng4-default-spinner/ng4-default-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ng4SpinnerComponent,Ng4DefaultSpinnerComponent],
  providers:[Ng4SpinnerService],
  exports:[Ng4SpinnerComponent,Ng4DefaultSpinnerComponent]
})
export class Ng4SpinnerModule { }
