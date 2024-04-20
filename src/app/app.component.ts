import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  standalone: false,

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Heldenseiten';
}
