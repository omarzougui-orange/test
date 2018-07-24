import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-date-confirmation',
  templateUrl: './date-confirmation.component.html',
  styleUrls: ['./date-confirmation.component.sass']
})
export class DateConfirmationComponent implements OnInit {
  dateFormGroup: FormGroup;

  ngOnInit() {
    this.dateFormGroup = new FormGroup({
      'birthDate': new FormControl(null, Validators.required)
    });
  }


  logForm(){
    console.log(this.dateFormGroup);
  }


}
