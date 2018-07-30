import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TransferLocalStorageMockService} from '../services/transfer-local-storage-mock.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-date-confirmation',
  templateUrl: './date-confirmation.component.html',
  styleUrls: ['./date-confirmation.component.sass']
})
export class DateConfirmationComponent implements OnInit {
  dateFormGroup: FormGroup;

  constructor(private transferMockService: TransferLocalStorageMockService,  private router: Router, private route: ActivatedRoute,){}
  ngOnInit() {
    this.dateFormGroup = new FormGroup({
      'birthDate': new FormControl(null, Validators.required)
    });
  }





  logForm() {
    // console.log(this.dateFormGroup.value.birthDate);
    if(this.transferMockService.verifyBirthDate(this.dateFormGroup.value.birthDate)){
      this.router.navigate(['../known_user'], {relativeTo: this.route});
    }else{
      this.router.navigate(['../error'], {relativeTo: this.route});
    }

  }


}



//[routerLink]="['../known_user']"
