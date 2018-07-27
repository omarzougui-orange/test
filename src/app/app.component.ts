import {Component, OnInit} from '@angular/core';
import {TransferService} from './transfer.service';
import { CookieService } from 'ngx-cookie-service';
import {Response} from '@angular/http';
import {TransferLocalStorageMockService} from './services/transfer-local-storage-mock.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  cookieValue = '';

  constructor(private  transferService: TransferService, private cookieService: CookieService, private transferMockService: TransferLocalStorageMockService) {}

ngOnInit() {
  this.transferMockService.initLocalDatabase();











}
}



// console.log(this.cookieService.getAll());


// this.transferService.storeRecipes2().subscribe((data) => {
//   console.log('hello2');
//   console.log(data);
// });
//
//
//
// setTimeout(() => {
//   this.transferService.storeRecipes3().subscribe((data) => {
//     console.log('hello2');
//     console.log(data);
//   });
// }, 5000);
