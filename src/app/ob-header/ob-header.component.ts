import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ob-header',
  templateUrl: './ob-header.component.html',
  styleUrls: ['./ob-header.component.sass']
})
export class ObHeaderComponent implements OnInit {
  @Input('firstname') firstname;
  @Input('lastname') lastname;
  @Input('amount') amount;



  constructor() { }

  ngOnInit() {
  }






}
