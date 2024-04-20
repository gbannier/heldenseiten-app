import {Component} from '@angular/core';
import {BodyComponent} from "./body/body.component";
import {NgbAlertModule, NgbModule, NgbNav, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BodyPartsComponent} from "./body-parts/body-parts.component";
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {MeditainmentComponent} from "./meditainment/meditainment.component";



@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  imports: [
    BodyPartsComponent,
    MeditainmentComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

  ],
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
