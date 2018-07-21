import { Routes } from "@angular/router";
import { BootstrapFourComponent } from "./bootstrap-four/bootstrap-four.component";
import { BootstrapFourBasicComponent } from "./bootstrap-four-basic/bootstrap-four-basic.component";

export const appRoutes: Routes = [
  {
    path: "bootstrap-4",
    component: BootstrapFourComponent,
    children: [
      {
        path: "basic",
        component: BootstrapFourBasicComponent
      },
      {
        path: "",
        redirectTo: "basic",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "bootstrap-3",
    pathMatch: "full"
  }
];
