import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultErrorsDemoComponent } from "./app/default-errors-demo/default-errors-demo.component";
import { HorizontalFormComponent } from "./app/horizontal-form/horizontal-form.component";

const APP_ROUTES: Routes = [
  { path: "default", component: DefaultErrorsDemoComponent },
  { path: "horizontal", component: HorizontalFormComponent },
  { path: "", redirectTo: "/default", pathMatch: "full" }
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
