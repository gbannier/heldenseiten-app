import {NgModule} from '@angular/core';
import {provideRouter, RouterModule, withComponentInputBinding} from '@angular/router';
import {routes} from "./app.routes";

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    enableTracing: false
  })],
  providers:[
    provideRouter(routes,withComponentInputBinding()),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
