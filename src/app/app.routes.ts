import { Routes } from '@angular/router';
import {BodyPartsComponent} from "./landing/body-parts/body-parts.component";
import {MeditainmentComponent} from "./landing/meditainment/meditainment.component";
import {AppRoute} from "./models/app-route";

export const routes: AppRoute[] = [
  {path:'body-parts', component: BodyPartsComponent},
  {path:'meditainment', component: MeditainmentComponent},
];
