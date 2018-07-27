import {Component, OnInit} from '@angular/core';
import {TransferService} from './transfer.service';
import { CookieService } from 'ngx-cookie-service';
import {Response} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  cookieValue = '';

  constructor(private  transferService: TransferService, private cookieService: CookieService) {}

ngOnInit() {
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











}
}
