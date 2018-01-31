import { Component, OnInit, isDevMode } from '@angular/core';
import { Ng4SpinnerService } from './ng4-spinner.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-ng4-spinner',
  templateUrl: './ng4-spinner.component.html',
  styleUrls: ['./ng4-spinner.component.scss']
})
export class Ng4SpinnerComponent implements OnInit {

  subscription: Subscription;
  showSpinner: boolean;
  constructor(private _ng4SpinnerService: Ng4SpinnerService) { }
  ngOnInit() {
    this.showSpinner = false;
    this.subscription = this._ng4SpinnerService.spinnerSubject
      .subscribe((state: boolean) => {
        if (isDevMode()) {
          console.log('Loader State:', state);
        }
        this.showSpinner = state;
      });
  }
  ngOnDestroy() {
    if (this.subscription.unsubscribe()) {
      this.subscription.unsubscribe();
    }
  }
}
