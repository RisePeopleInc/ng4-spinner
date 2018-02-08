import { Component } from '@angular/core';
import { Ng4SpinnerService } from './ng4-spinner/ng4-spinner.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private ngSpinner:Ng4SpinnerService){

  }
  showSpinner()
  {
   this.ngSpinner.show();
   console.log("sss");
    setTimeout(() => {
     this.ngSpinner.hide();
    }, 10000);
  }
}
