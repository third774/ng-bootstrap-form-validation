import { Routes } from "@angular/router";
import { BootstrapFourComponent } from "./bootstrap-four/bootstrap-four.component";
import { BootstrapThreeComponent } from "./bootstrap-three/bootstrap-three.component";

export const appRoutes: Routes = [
  {
    path: "bootstrap-3",
    component: BootstrapThreeComponent
  },
  {
    path: "bootstrap-4",
    component: BootstrapFourComponent
  },
  {
    path: "",
    redirectTo: "bootstrap-3",
    pathMatch: "full"
  }
];
