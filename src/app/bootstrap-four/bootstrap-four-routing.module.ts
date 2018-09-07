import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BootstrapFourBasicComponent } from "./bootstrap-four-basic/bootstrap-four-basic.component";
import { BootstrapFourComponent } from "./bootstrap-four.component";

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapFourRoutingModule {}
