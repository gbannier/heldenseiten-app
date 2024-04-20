import { Component } from '@angular/core';
import {BodyComponent} from "../body/body.component";
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
interface Alert {
  type: AlertType;
  bodyPart:BodyPart
  message: string;
}
type AlertType = 'success' | 'info' | 'warning' | 'danger';
type BodyPart = 'head' | 'hand' | 'foot';

@Component({
  selector: 'app-body-parts',
  standalone: true,
  imports: [BodyComponent, NgbAlertModule],
  templateUrl: './body-parts.component.html',
  styleUrl: './body-parts.component.css'
})
export class BodyPartsComponent {

  alert: Alert| undefined = undefined;
  handClicked() {
    this.alert=undefined;
    this.alert = {type:'success', bodyPart: 'hand', message: 'Hand clicked'};
  }

  headClicked() {
    this.alert=undefined;
    this.alert = {type:'success', bodyPart: 'head', message: 'Head clicked'};
  }

  footClicked() {
    this.alert=undefined;
    this.alert = {type:'success', bodyPart: 'foot', message: 'Foot clicked'};
  }

  close() {
    this.alert=undefined;
  }
}
