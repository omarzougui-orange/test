import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InformationPageConfiguration} from '../information-page-configuration';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.sass']
})
export class ConfirmationComponent implements OnInit {


  config: InformationPageConfiguration;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const x = this.route.data.subscribe(
      (data: InformationPageConfiguration) => {
        console.log(data);
        this.config = data;


      }
    );
  }


}
