import {Component} from '@angular/core';
import {BodyPartsComponent} from "./body-parts/body-parts.component";
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {MeditainmentComponent} from "./meditainment/meditainment.component";
import {RoutingUrlType} from "../models/routing.url.type.model";
import {AppRoute} from "../models/app-route";
import {CommonModule} from "@angular/common";



@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  imports: [
    CommonModule,
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
