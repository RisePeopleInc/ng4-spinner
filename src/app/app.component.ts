import { Component } from '@angular/core';
import { Ng4SpinnerService } from './ng4-spinner/ng4-spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private ngSpinner:Ng4SpinnerService){
    ngSpinner.show();
    setTimeout(() => {
      ngSpinner.hide();
    }, 10000);
  }
}
