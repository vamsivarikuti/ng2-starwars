import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { peopleRoutes } from './people/';

export const routes: RouterConfig = [
  ...peopleRoutes,
  {path: '', component: AppComponent},
  {path: '**', component: AppComponent},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
