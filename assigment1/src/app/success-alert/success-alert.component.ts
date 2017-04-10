import {Component} from '@angular/core';
/**
 * Created by Farouk Errahmani on 10/04/2017.
 */
@Component({
  selector: 'app-success-alert',
  template: `
    <p>{{message}}</p>
  `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: greenyellow;
        border: 1px solid green;
      }
    `
  ]
})
export class SuccessAlertComponent {
  message = 'Success Alert';
}
