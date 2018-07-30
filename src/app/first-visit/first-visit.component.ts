import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TransferService} from '../transfer.service';
import {InformationPageConfiguration} from '../information-page-configuration';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationPageConfiguration} from '../authentication-page-configuration';
import {TransferLocalStorageMockService} from '../services/transfer-local-storage-mock.service';
import {Profile} from '../model/profile';

@Component({
  selector: 'app-first-visit',
  templateUrl: './first-visit.component.html',
  styleUrls: ['./first-visit.component.sass']
})
export class FirstVisitComponent implements OnInit {
  signupForm: FormGroup;
  firstName = '';
  lastName = '';
  amount = '';
  visible = false;

  routeData: AuthenticationPageConfiguration;


  constructor(private transferService: TransferService, private route: ActivatedRoute,  private transferMockService: TransferLocalStorageMockService) {
  }

  ngOnInit() {
    this.initForm();
    this.route.data.subscribe(
      (data: AuthenticationPageConfiguration) => {
        console.log(data);
        this.routeData = data;
        this.visible = data.slideChecked;
        if(data.visite === 2){
          // this.initForm(this.transferMockService.profile);
        }

      }
    );

  }


  isDateRequired() {
    return this.visible ? Validators.required : null;

  }





  //
  // initForm2(profile: Profile) {
  //   this.signupForm = new FormGroup({
  //     'lastname': new FormControl(profile.lastName, Validators.required),
  //     'firstname': new FormControl(profile.firstName, Validators.required),
  //     'iban': new FormControl(profile.iban, Validators.required),
  //     'birthDate': new FormControl(profile.birthDate, this.isDateRequired())
  //
  //   });
  // }


  initForm(){
    this.signupForm = new FormGroup({
      'lastname': new FormControl(null, Validators.required),
      'firstname': new FormControl(null, Validators.required),
      'iban': new FormControl(null, Validators.required),
      'birthDate': new FormControl(null, this.isDateRequired())

    });
  }










}
