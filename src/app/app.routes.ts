import { Routes } from "@angular/router";
import { BootstrapFourComponent } from "./bootstrap-four/bootstrap-four.component";

export const appRoutes: Routes = [
  {
    path: "bootstrap-4",
    component: BootstrapFourComponent,
    children: []
  },
  {
    path: "",
    redirectTo: "bootstrap-3",
    pathMatch: "full"
  }
];
