import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BodyComponent} from "../body/body.component";
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import {
  ActivatedRoute,
  provideRouter,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  withComponentInputBinding
} from "@angular/router";
import {HandComponent} from "./hand/hand.component";
import {HeadComponent} from "./head/head.component";
import {FootComponent} from "./foot/foot.component";
import {BehaviorSubject, defer, from, map, Observable, switchMap, tap} from "rxjs";
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
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  alert: Alert| undefined = undefined;
  showBody$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  ngOnDestroy() {
    console.log('BodyPartsComponent destroyed')
  }

  ngOnInit() {
    console.log('BodyPartsComponent initialized');
    this.route.paramMap.pipe( map(params=>{
      console.log('params', params);
      return true}));

  }

  handClicked() {
    // this.alert=undefined;
    // this.alert = {type:'success', bodyPart: 'hand', message: 'Hand clicked'};
    this.router.navigate(['body-parts/hand']).then(r => this.showBody=false);
  }

  headClicked() {
    // this.alert=undefined;
    // this.alert = {type:'success', bodyPart: 'head', message: 'Head clicked'};
    this.router.navigate(['body-parts/head']).then(r => console.log(r));

  }

  footClicked() {
    // this.alert=undefined;
    // this.alert = {type:'success', bodyPart: 'foot', message: 'Foot clicked'};
    this.router.navigate(['body-parts/foot']).then(r => console.log(r));
  }

  close() {
    this.alert=undefined;
  }
}
