/**
 * Created by Farouk Errahmani on 17/04/2017.
 */
export class CounterService {
  counterActivateUser = 0;
  counterInactivateUser = 0;

  incrementActivatecounter() {
    this.counterActivateUser++;
    console.log('Activatecounter ' + this.counterActivateUser);
  }

  incrementInactivatecounter() {
    this.counterInactivateUser++;
    console.log('Inativatecounter ' + this.counterInactivateUser);
  }

}
