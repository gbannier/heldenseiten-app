import { Routes } from '@angular/router';
import {BodyPartsComponent} from "./landing/body-parts/body-parts.component";
import {MeditainmentComponent} from "./landing/meditainment/meditainment.component";
import {AppRoute} from "./models/app-route";

import {HeadComponent} from "./landing/body-parts/head/head.component";
import {HandComponent} from "./landing/body-parts/hand/hand.component";
import {FootComponent} from "./landing/body-parts/foot/foot.component";
import {LandingComponent} from "./landing/landing.component";

export const routes: AppRoute[] = [

  {
    path: 'body-parts',
    component: BodyPartsComponent,
    children: [
      {
        path: 'head',
        component: HeadComponent,
      },
      {
        path: 'hand',
        component: HandComponent,
      },
      {
        path: 'foot',
        component: FootComponent,
      },
    ]
  },
  {
    path: 'meditainment',
    component: MeditainmentComponent,
  },
];
