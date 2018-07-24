import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatInputModule, MatButtonModule, MatSlideToggleModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstVisitComponent} from './first-visit/first-visit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import { ObDataPickerComponent } from './ob-data-picker/ob-data-picker.component';
import { DateConfirmationComponent } from './date-confirmation/date-confirmation.component';
import { ObHeaderComponent } from './ob-header/ob-header.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstVisitComponent,
    ConfirmationComponent,
    ObDataPickerComponent,
    DateConfirmationComponent,
    ObHeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
