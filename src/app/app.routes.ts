import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Services } from './pages/services/services';
import { Community } from './pages/community/community';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: '', component: Services},
    { path: '', component: Community},
    { path: '**', redirectTo: '' }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }