import {Route} from "@angular/router";
import {RoutingUrlType} from "./routing.url.type.model";

export interface AppRoute extends Partial<Route> {
  path?: RoutingUrlType;
}
