import { NgModule } from '@angular/core';
import {Routes, RouterModule, provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from "./app.routes";

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[
    provideRouter(routes,withComponentInputBinding()),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
