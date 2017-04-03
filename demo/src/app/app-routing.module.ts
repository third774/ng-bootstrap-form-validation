import {Route, RouterModule} from "@angular/router";
import {ReactiveFormDemoComponent} from "./reactive-form-demo/reactive-form-demo.component";


const APP_ROUTES: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/Reactive-Form-Demo"
  },
  {
    path: "Reactive-Form-Demo",
    component: ReactiveFormDemoComponent
  }
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
