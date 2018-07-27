import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }




  storeRecipes2() {

    return this.httpClient.get('http://localhost:7777/portalserver/services/oslo-services/p2p/b6b8e2fe4e5b4835b27e7dadae3cfc19',
      {
        withCredentials: true,
        headers: new HttpHeaders()
          .append('accept', 'application/json')

      }
      );
  }






  storeRecipes3() {


    return this.httpClient.post('http://localhost:7777/portalserver/services/oslo-services/p2p/b6b8e2fe4e5b4835b27e7dadae3cfc19/complete',
      {
        'firstName': 'John',
        'lastName': 'Doe',
        'choice': 'ACCEPTED',
        'iban': 'FR1420041010050500013M02606'
      },
      {withCredentials: true,
        headers: new HttpHeaders()
          .append('X-BBXSRF', this.cookieService.get('BBXSRF'))

      });
  }











}
