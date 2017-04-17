import { EventEmitter } from '@angular/core';
/**
 * Created by Farouk Errahmani on 17/04/2017.
 */
export class CounterService {
  private counterActivateUser = 0;
  counterInactivateUser: Number = 0;

  counterActivateUserChanged = new EventEmitter<number>();

  incrementActivatecounter() {
    this.counterActivateUser++;
    console.log('Activatecounter ' + this.counterActivateUser);
    this.counterActivateUserChanged.emit(this.counterActivateUser);
  }

  incrementInactivatecounter() {
    this.counterInactivateUser++;
    console.log('Inativatecounter ' + this.counterInactivateUser);
  }

  getCounterActivateUser() {
    return new Number(this.counterActivateUser);
  }

}
