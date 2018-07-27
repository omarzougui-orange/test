import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatInputModule, MatButtonModule, MatSlideToggleModule, MatProgressSpinnerModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstVisitComponent} from './first-visit/first-visit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import { ObDataPickerComponent } from './ob-data-picker/ob-data-picker.component';
import { DateConfirmationComponent } from './date-confirmation/date-confirmation.component';
import { ObHeaderComponent } from './ob-header/ob-header.component';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TransferAnalyzerComponent } from './transfer-analyzer/transfer-analyzer.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstVisitComponent,
    ConfirmationComponent,
    ObDataPickerComponent,
    DateConfirmationComponent,
    ObHeaderComponent,
    TransferAnalyzerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule
  //
   ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
