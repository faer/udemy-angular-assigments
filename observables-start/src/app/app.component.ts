import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  user1activated = false;
  user2activated = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1activated = true;
        } else {
          this.user2activated = true;
        }
      }
    );
  }


}
