import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {InformationPageConfiguration} from './information-page-configuration';
import {FirstVisitComponent} from './first-visit/first-visit.component';
import {AuthenticationPageConfiguration} from './authentication-page-configuration';
import {DateConfirmationComponent} from './date-confirmation/date-confirmation.component';

const routes: Routes = [
  // first visit
  {path: 'unknown_user', component: FirstVisitComponent, data: AuthenticationPageConfiguration.VISIT1_DATA},
  // 2nd visit
  {path: 'known_user', component: FirstVisitComponent, data: AuthenticationPageConfiguration.VISIT2_DATA},
  {path: 'confirmation', component: ConfirmationComponent, data: InformationPageConfiguration.CONFIRMATION_DATA},
  {path: 'error', component: ConfirmationComponent, data: InformationPageConfiguration.ERROR_DATA},
  {path: 'validation', component: DateConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
