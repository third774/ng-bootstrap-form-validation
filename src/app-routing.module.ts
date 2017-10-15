import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultErrorsDemoComponent } from "./app/default-errors-demo/default-errors-demo.component";
import { HorizontalFormComponent } from "./app/horizontal-form/horizontal-form.component";

const APP_ROUTES: Routes = [
  { path: "defaults", component: DefaultErrorsDemoComponent },
  { path: "horizontal", component: HorizontalFormComponent },
  { path: "", redirectTo: "/defaults", pathMatch: "full" }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
