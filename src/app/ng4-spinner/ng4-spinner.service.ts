import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class Ng4SpinnerService {

  public spinnerSubject = new BehaviorSubject<boolean>(false );
  constructor() { }
  hide() {
    this.spinnerSubject.next(false);
  }
  show() {
    this.spinnerSubject.next(true);
  }

}
