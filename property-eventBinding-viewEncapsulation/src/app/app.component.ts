import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameStarted(eventData: number) {
    if (eventData % 2 === 0) {
      this.evenNumbers.push(eventData);
    } else {
      this.oddNumbers.push(eventData);
    }
  }
}
