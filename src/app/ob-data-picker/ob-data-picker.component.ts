import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ob-data-picker',
  templateUrl: './ob-data-picker.component.html',
  styleUrls: ['./ob-data-picker.component.sass']
})
export class ObDataPickerComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  @ViewChild('date') date: ElementRef;
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


  // inputValueChanged(event:any){
  //   console.log(this.dateText);
  // }
  //


  // onInputClicked() {
  //   console.log('event =======================');
  //   this.date.nativeElement.dispatchEvent(new Event('click'));
  //   this.date.nativeElement.dispatchEvent(new Event('focus'));
  //   this.date.nativeElement.dispatchEvent(new Event('click'));
  // }




}
