import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {InformationPageConfiguration} from './information-page-configuration';
import {FirstVisitComponent} from './first-visit/first-visit.component';
import {AuthenticationPageConfiguration} from './authentication-page-configuration';
import {DateConfirmationComponent} from './date-confirmation/date-confirmation.component';
import {TransferAnalyzerComponent} from './transfer-analyzer/transfer-analyzer.component';

const routes: Routes = [
  {path: 'transfer/:transferAlis', component: TransferAnalyzerComponent},
  // first visit
  {path: 'transfer/:transferAlis/unknown_user', component: FirstVisitComponent, data: AuthenticationPageConfiguration.VISIT1_DATA},
  // 2nd visit
  {path: 'transfer/:transferAlis/known_user', component: FirstVisitComponent, data: AuthenticationPageConfiguration.VISIT2_DATA},

  {path: 'transfer/:transferAlis/confirmation', component: ConfirmationComponent, data: InformationPageConfiguration.CONFIRMATION_DATA},
  {path: 'transfer/:transferAlis/error', component: ConfirmationComponent, data: InformationPageConfiguration.ERROR_DATA},
  {path: 'transfer/:transferAlis/validation', component: DateConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
