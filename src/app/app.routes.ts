import {Route} from '@angular/router';
import {MeditainmentComponent} from "./landing/meditainment/meditainment.component";
import {LandingComponent} from "./landing/landing.component";
import {ModalContainerComponent} from "./landing/modal-container/modal-container.component";

export const routes: Route[] = [
  {path: '', component: LandingComponent},
  {
    path: 'body-parts/:part',
    component: ModalContainerComponent,
  },
  {
    path: 'meditainment',
    component: MeditainmentComponent,
  },
];
