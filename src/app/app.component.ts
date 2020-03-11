import { Component, OnInit } from '@angular/core';
import { UserService } from '../app/service/user.service';
import { NotificationHubService } from '../app/service/notification-hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'api';
  constructor(private userService: UserService, private notificationHubService:NotificationHubService)
  {

  }
  ngOnInit()
  {
    this.notificationHubService.startConnection();
    // this.userService.getUserDetails().subscribe(data => {
    //   console.log(data);
    // });
  }
}
