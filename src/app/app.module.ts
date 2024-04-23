import {NgModule} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AppComponent} from "./app.component";
import {LandingComponent} from "./landing/landing.component";
import {BrowserModule} from "@angular/platform-browser";
import {BodyPartsComponent} from "./landing/body-parts/body-parts.component";
import {AppRoutingModule} from "./app.routing.module";
import {ModalContainerComponent} from "./landing/modal-container/modal-container.component";


@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    LandingComponent,
    ModalContainerComponent,
   BodyPartsComponent,
  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

