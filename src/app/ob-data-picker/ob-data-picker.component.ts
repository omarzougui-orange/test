import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ob-data-picker',
  templateUrl: './ob-data-picker.component.html',
  styleUrls: ['./ob-data-picker.component.sass']
})
export class ObDataPickerComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;

  dateText = '';
  constructor() {
  }

  ngOnInit() {

  }

  changeDate(e) {
    this.dateText = this.displayDate(this.parentFormGroup.value.birthDate);
  }


  displayDate(date: string): string {
    const dateArray = date.split('-');
    return dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
  }




}
