import { Component, OnInit, isDevMode } from '@angular/core';
import { Ng4SpinnerService } from '../ng4-spinner/ng4-spinner.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ng4-default-spinner',
  templateUrl: './ng4-default-spinner.component.html',
  styleUrls: ['./ng4-default-spinner.component.scss']
})
export class Ng4DefaultSpinnerComponent implements OnInit {
  subscription: Subscription;
  showDefaultSpinner: boolean;
  constructor(private _ng4SpinnerService: Ng4SpinnerService) { }
  ngOnInit() {
    this.showDefaultSpinner = false;
    this.subscription = this._ng4SpinnerService.spinnerSubject
      .subscribe((state: boolean) => {
        this.showDefaultSpinner = state;
      });
  }
  ngOnDestroy() {
    if (this.subscription.unsubscribe()) {
      this.subscription.unsubscribe();
    }
  }
}
