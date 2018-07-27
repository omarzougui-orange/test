import { Component, OnInit } from '@angular/core';
import {InformationPageConfiguration} from '../information-page-configuration';
import {ActivatedRoute, Router} from '@angular/router';
import {TransferLocalStorageMockService} from '../services/transfer-local-storage-mock.service';
import {Beneficiary} from '../model/beneficiary';
import {TransferInfo} from '../model/transfer-info';

@Component({
  selector: 'app-transfer-analyzer',
  templateUrl: './transfer-analyzer.component.html',
  styleUrls: ['./transfer-analyzer.component.sass']
})
export class TransferAnalyzerComponent implements OnInit {
  // color = 'primary';
  // mode = 'determinate';
  // value = 50;
  constructor(private route: ActivatedRoute, private transferMockService: TransferLocalStorageMockService, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (routeParams) => {
        const transferAlias = routeParams.transferAlis;
        // console.log(this.transferMockService.getTransferInfoByAlias(transferAlias));

        const transferInfo: TransferInfo = this.transferMockService.getTransferInfoByAlias(transferAlias);
        if(transferInfo === null){
        //  go to error page transfer not find
        }
        const beneficiaryId: string = this.transferMockService.getTransferInfoByAlias(transferAlias).beneficiaryId;

        const beneficiary: Beneficiary = this.transferMockService.getBeneficiaryById(beneficiaryId);

        if (beneficiary.registred === true){
          this.router.navigate(['known_user'], {relativeTo: this.route});
        } else {
          this.router.navigate(['validation'], {relativeTo: this.route});
        }

        // this.transferMockService.getProfileByBeneficiaryId(beneficiaryId);


      }
    );
  }


}
