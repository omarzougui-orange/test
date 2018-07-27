import { Injectable } from '@angular/core';
import {TransferInfo} from '../model/transfer-info';
import {Profile} from '../model/profile';
import {Beneficiary} from '../model/beneficiary';
@Injectable({
  providedIn: 'root'
})
export class TransferLocalStorageMockService {

  constructor() { }

  initLocalDatabase() {
    const testObject = { 'one': 1, 'two': 2, 'three': 3 };
    localStorage.setItem('testObject', JSON.stringify(testObject));
  }


  // getTransferInfoByAlias(transferAlias: string): TransferInfo {
  //
  // }
  //
  //
  // getBeneficiaryById(id: string): Beneficiary{
  //
  // }
  //
  // getProfileByBeneficiaryId(id: string){
  //
  // }



























}
