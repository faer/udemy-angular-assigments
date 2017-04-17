import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterFromInactiveToActive: number;
  counterFromActiveToInactivate: number;

  constructor(private counterService: CounterService) {
  }


  ngOnInit() {
    this.counterFromActiveToInactivate = this.counterService.counterInactivateUser;
    this.counterFromInactiveToActive = this.counterService.getCounterActivateUser().valueOf();
    this.counterService.counterActivateUserChanged
      .subscribe(
        (count: number) => {
          this.counterFromInactiveToActive = count;
        }
      );
  }

}
