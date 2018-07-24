import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {InformationPageConfiguration} from './information-page-configuration';
import {FirstVisitComponent} from './first-visit/first-visit.component';

const routes: Routes = [
  {path: '', component: FirstVisitComponent},
  {path: 'confirmation', component: ConfirmationComponent, data: InformationPageConfiguration.CONFIRMATION_DATA},
  {path: 'error', component: ConfirmationComponent, data: InformationPageConfiguration.ERROR_DATA}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
