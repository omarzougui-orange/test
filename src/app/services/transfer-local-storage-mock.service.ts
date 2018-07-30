import { Injectable } from '@angular/core';
import {TransferInfo} from '../model/transfer-info';
import {Profile} from '../model/profile';
import {Beneficiary} from '../model/beneficiary';
import DateTimeFormat = Intl.DateTimeFormat;
import {MAT_DATE_FORMATS} from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class TransferLocalStorageMockService {

   transferInfo: TransferInfo;
   beneficiary : Beneficiary;
   profile: Profile;





  constructor() { }

  initLocalDatabase() {
    const tranfers: TransferInfo[] = [
      {transferAlias: 'tyu564tyu4', amount: 300, beneficiaryId: '00007', currency: 'EUR', firstNameOfSender: 'Omar', lastNameOfSender: 'Marzougui', remainingDays: 5 }, // known
      {transferAlias: 'w9xc8wx9c7', amount: 150, beneficiaryId: '00025', currency: 'EUR', firstNameOfSender: 'Jérémie', lastNameOfSender: 'Muller', remainingDays: 0 },
      {transferAlias: 'vb2n1vb21n', amount: 200, beneficiaryId: '00020', currency: 'EUR', firstNameOfSender: 'Bernard', lastNameOfSender: 'Dubois', remainingDays: 7 },
      {transferAlias: 'a8z2e8az2e', amount: 600, beneficiaryId: '00007', currency: 'EUR', firstNameOfSender: 'Céline', lastNameOfSender: 'Martin', remainingDays: 2 },
      {transferAlias: 'co19co37an', amount: 375, beneficiaryId: '00013', currency: 'EUR', firstNameOfSender: 'Céline', lastNameOfSender: 'Martin', remainingDays: 0 }
    ];
    localStorage.setItem('transfers', JSON.stringify(tranfers));

    const beneficiaries: Beneficiary[] = [
      {id: '00007', birthDate: '23/11/1988', registred: false},
      {id: '00025', birthDate: '23/11/1988', registred: true},
      {id: '00020', birthDate: '23/11/1988', registred: true},
      {id: '00013', birthDate: '23/11/1988', registred: false}
    ];
    localStorage.setItem('beneficiaries', JSON.stringify(beneficiaries));

    const profiles: Profile[] = [
      {beneficiaryId: '00020', birthDate: '11/05/1980', iban: 'FR7630004000031234567890143', lastName: 'Durand', firstName: 'Camille'},
      {beneficiaryId: '00025', birthDate: '17/03/1990', iban: 'FR7630006000011234567890189', lastName: 'Michel', firstName: 'Christine'}
    ];
    localStorage.setItem('profiles', JSON.stringify(profiles));

  }

  setProfile() {}

  forgetBeneficiaryById(){
  }


  getTransferInfoByAlias(transferAlias: string): TransferInfo {
    const transfers: TransferInfo[] = JSON.parse((localStorage.getItem('transfers')));
    for (let i = 0; i < transfers.length; i++) {
      if (transfers[i].transferAlias === transferAlias) {
        this.transferInfo = transfers[i];
        return transfers[i];
      }
    }
    return null;
  }


  getBeneficiaryById(beneficiaryId: string): Beneficiary{
    // console.log(beneficiaryId);
    const beneficiaries: Beneficiary[] = JSON.parse((localStorage.getItem('beneficiaries')));
    for (let i = 0; i < beneficiaries.length; i++) {
      if (beneficiaries[i].id === beneficiaryId) {
        this.beneficiary = beneficiaries[i];
        return beneficiaries[i];
      }
    }
    return null;
  }

  getProfileByBeneficiaryId(beneficiaryId: string){
    console.log(beneficiaryId);
    const profiles: Profile[] = JSON.parse((localStorage.getItem('profiles')));
    for (let i = 0; i < profiles.length; i++) {
      if (profiles[i].beneficiaryId === beneficiaryId) {
        // console.log(profiles[i]);
        this.profile = profiles[i];
        return profiles[i];
      }
    }
    return null;
  }

  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    let d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  }


  verifyBirthDate(date: Date): boolean {


    console.log( this.convertDate(date));
    console.log(this.getProfileByBeneficiaryId(this.transferInfo.beneficiaryId).birthDate);



    let stringDate: string = this.convertDate(date);
    console.log(stringDate === this.getProfileByBeneficiaryId(this.transferInfo.beneficiaryId).birthDate);
    return stringDate === this.getProfileByBeneficiaryId(this.transferInfo.beneficiaryId).birthDate;

  }






}
