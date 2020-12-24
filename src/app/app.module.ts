import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SearchComponent } from "./search/search.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserServiceService } from "./user-service.service";

import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full", component: SearchComponent },
  { path: "user-list", component: UserListComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SearchComponent,
    UserListComponent
  ],
  bootstrap: [AppComponent],
  providers: [UserServiceService]
})
export class AppModule {}
