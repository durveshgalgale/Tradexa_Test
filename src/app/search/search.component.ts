import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { UserServiceService } from "../user-service.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  public searchString = new FormControl("");
  private _searchSubject: Subject<string> = new Subject();

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUserData().subscribe(data => {
      console.log(data);
    });
  }

  searchUser(event) {
    console.log(event.value);

    this.userService.getUserData().subscribe(data => {
      data.filter(obj => {
        if (obj.name === event.value) {
          this.userService.setState(obj);
        }
      });
    });
    this.router.navigate(["/user-list"]);

    // this._searchSubject
    //   .pipe(debounceTime(500))
    //   .subscribe((searchValue: string) => {
    //     // Filter Function
    //     this.userService.getUserData().subscribe(data => {
    //       data.filter(obj => {
    //         if (obj.company.name === event.value) {
    //           this.userService.setState(obj);
    //           console.log(obj);
    //         }
    //       });
    //     });
    //     this.router.navigate(["/user-list"]);
    //   });
  }
}
