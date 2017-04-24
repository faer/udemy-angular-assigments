import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
/**
 * Created by Farouk Errahmani on 24/04/2017.
 */
export class CustomValidators {

  private static forbiddenProjectNames: string[] = ['Test'];

  static projectNamesValidator(control: FormControl): {[s: string]: boolean} {
    if (CustomValidators.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'forbiddenName' : true};
    }
    return null;
  }

  static projectNamesValidatorAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise(
    (resolve, reject) => {
      setTimeout(
        () => {
          if (CustomValidators.forbiddenProjectNames.indexOf(control.value) !== -1) {
            resolve({'forbiddenNameAsync' : true});
          } {
            resolve(null);
          }
        }, 2000);
      }
    );
    return promise;
  }
}
