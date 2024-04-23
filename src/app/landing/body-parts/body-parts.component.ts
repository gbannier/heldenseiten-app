import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BodyComponent} from "../body/body.component";
import {NgbAlertModule, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {HandComponent} from "./hand/hand.component";
import {HeadComponent} from "./head/head.component";
import {FootComponent} from "./foot/foot.component";
import {BehaviorSubject} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";

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
  imports: [
    CommonModule,
    BodyComponent,
    HandComponent,
    HeadComponent,
    FootComponent,
    NgbAlertModule,
    RouterLink, RouterOutlet, AsyncPipe
  ],
  templateUrl: './body-parts.component.html',
  styleUrl: './body-parts.component.css'
})
export class BodyPartsComponent implements OnDestroy, OnInit{
  @Input()
  set showBody(showBody: boolean) {
    this.showBody$.next(showBody);
  }
  constructor(private router: Router, private route: ActivatedRoute,  private modalService: NgbModal) {
  }
  audio:HTMLAudioElement  = new Audio('assets/wotutesdennweh.mp3');
  alert: Alert| undefined = undefined;
  showBody$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  ngOnDestroy() {
    console.log('BodyPartsComponent destroyed')
  }

  ngOnInit() {
    console.log('BodyPartsComponent initialized');
    const element=document.getElementById('wotutesdennweh');
    element?.addEventListener('click', ()=>this.audio.play());
  }

  handClicked() {
    // this.alert=undefined;
    // this.alert = {type:'success', bodyPart: 'hand', message: 'Hand clicked'};
    this.router.navigate(['body-parts/hand']);
  }

  headClicked() {
    // this.alert=undefined;
    // this.alert = {type:'success', bodyPart: 'head', message: 'Head clicked'};
    this.router.navigate(['body-parts/head']);

  }

  footClicked() {
    // this.alert=undefined;
    // this.alert = {type:'success', bodyPart: 'foot', message: 'Foot clicked'};
    this.router.navigate(['body-parts/foot']);
  }

  close() {
    this.modalService.dismissAll()
    this.alert=undefined;
  }

}
