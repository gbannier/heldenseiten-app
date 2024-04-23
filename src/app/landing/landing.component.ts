import {Component} from '@angular/core';
import {BodyPartsComponent} from "./body-parts/body-parts.component";
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {MeditainmentComponent} from "./meditainment/meditainment.component";
import {RoutingUrlType} from "../models/routing.url.type.model";
import {AppRoute} from "../models/app-route";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";



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
    MatIconModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
}
