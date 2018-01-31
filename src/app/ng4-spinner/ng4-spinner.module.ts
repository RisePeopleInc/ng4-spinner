import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng4SpinnerComponent } from './ng4-spinner.component';
import { Ng4SpinnerService } from './ng4-spinner.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ng4SpinnerComponent],
  providers:[Ng4SpinnerService],
  exports:[Ng4SpinnerComponent]
})
export class Ng4SpinnerModule { }
