import { Routes } from "@angular/router";
import { DefaultErrorsDemoComponent } from "./default-errors-demo/default-errors-demo.component";

export const appRoutes: Routes = [
  {
    path: "bootstrap-3",
    component: DefaultErrorsDemoComponent
  },
  {
    path: "",
    redirectTo: "bootstrap-3",
    pathMatch: "full"
  }
];
