import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks-you',
  templateUrl: './thanks-you.component.html',
  styleUrls: ['./thanks-you.component.css']
})
export class ThanksYouComponent implements OnInit {

  comerciales = [
    {
      name: 'Alejandra',
      lastName: 'Vila',
      phone: '(+1) 1 580027',
      phoneValue: '1580027',
      cellPhone: '+(57) 312 432 3613',
      email: 'a.vila@shiptainer.com'
    },
    {
      name: 'Robert',
      lastName: ' Patrick',
      phone: '(+1) 1 580027',
      phoneValue: '1580027',
      cellPhone: '+1 (407) 2647110',
      email: 'r.patrick@shiptainer.com'
    },
    {
      name: 'Yang',
      lastName: 'Seung',
      phone: '(+1) 1 580027',
      phoneValue: '1580027',
      cellPhone: '+1 (407) 2647110',
      email: 'y.seung@shiptainer.com'
    }
  ];

  comercial = {};

  constructor() {
    const email = localStorage.getItem('comercialEmail');
    this.comercial = this.comerciales.find((e: any) => e.email === email);
   }

  ngOnInit() {
  }

}
