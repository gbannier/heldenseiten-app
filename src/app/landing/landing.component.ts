import {Component} from '@angular/core';
import {BodyPartsComponent} from "./body-parts/body-parts.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MeditainmentComponent} from "./meditainment/meditainment.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
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

}
