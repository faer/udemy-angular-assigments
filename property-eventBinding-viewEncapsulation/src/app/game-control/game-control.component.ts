import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGame = new EventEmitter<number>();

  isGameStarted = false;
  count = 0;
  interval: any;

  constructor() {

  }

  ngOnInit() {
  }

  onStartGame() {
    this.isGameStarted = true;
    this.interval = setInterval(() => {
      this.startGame.emit(++this.count);
    }, 1000);
  }

  onPauseGame() {
    this.isGameStarted = false;
    clearInterval(this.interval);
  }

}
