import {Component} from '@angular/core';
import {BodyComponent} from "./body/body.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    BodyComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  handClicked() {
     alert('Hand clicked');
  }

  headClicked() {
     alert('Head clicked');
  }

  footClicked() {
      alert('Foot clicked');
  }
}
