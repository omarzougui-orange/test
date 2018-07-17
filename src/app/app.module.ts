import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';





import {MatInputModule, MatButtonModule, MatSlideToggleModule} from '@angular/material';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstVisitComponent } from './first-visit/first-visit.component';
import {FormsModule} from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstVisitComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
