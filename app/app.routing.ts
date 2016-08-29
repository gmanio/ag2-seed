import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent }      from './Home/home';

const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent,
  terminal: true
  },
  {
  path: 'home',
  component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
