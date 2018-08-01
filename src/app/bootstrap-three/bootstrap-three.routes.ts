import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BootstrapThreeComponent } from "./bootstrap-three.component";

const bootstrapThreeRoutes: Routes = [
  {
    path: "bootstrap-3",
    component: BootstrapThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(bootstrapThreeRoutes)],
  exports: [RouterModule]
})
export class BootstrapThreeRoutingModule {}
