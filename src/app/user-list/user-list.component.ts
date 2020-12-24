import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  subscription: any;
  userList = [];

  constructor(private userService: UserServiceService) {
    this.subscription = this.userService
      .getState()
      .subscribe(selectionFormatState => {
        this.userList.push( selectionFormatState);
      });
  }

  ngOnInit() {}
}
