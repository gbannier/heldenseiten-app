import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppComponent} from "./app.component";
import {LandingComponent} from "./landing/landing.component";
import {BrowserModule} from "@angular/platform-browser";
import {
  provideRouter,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  withComponentInputBinding
} from "@angular/router";
import {routes} from "./app.routes";
import {BodyPartsComponent} from "./landing/body-parts/body-parts.component";
import {AppRoutingModule} from "./app.routing.module";



@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    LandingComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

