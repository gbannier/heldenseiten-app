import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppComponent} from "./app.component";
import {LandingComponent} from "./landing/landing.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./app.routes";



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    LandingComponent,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
