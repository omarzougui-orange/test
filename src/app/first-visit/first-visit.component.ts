import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-first-visit',
  templateUrl: './first-visit.component.html',
  styleUrls: ['./first-visit.component.sass']
})
export class FirstVisitComponent implements OnInit {
  signupForm: FormGroup;
  visible: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'lastname': new FormControl(null, Validators.required),
      'firstname': new FormControl(null,Validators.required),
      'iban': new FormControl(null,Validators.required),
      'birthDate': new FormControl(null,this.isDateRequired())

    });
  }


  isDateRequired(){
    return this.visible? Validators.required : null;

  }










}
