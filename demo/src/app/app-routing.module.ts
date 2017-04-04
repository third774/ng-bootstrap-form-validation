import { Route, RouterModule } from '@angular/router';
import { BasicExampleComponent } from "app/basic-example/basic-example.component";
import { CustomErrorsComponent } from "app/custom-errors/custom-errors.component";

const APP_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic-example'
  }, {
    path: 'basic-example',
    component: BasicExampleComponent
  }, {
    path: 'custom-errors',
    component: CustomErrorsComponent
  }
];

export const AppRoutesModule = RouterModule.forRoot(APP_ROUTES);
