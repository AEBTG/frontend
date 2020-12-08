import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageModule } from './components/main-page/main-page.module';

import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    MainPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
