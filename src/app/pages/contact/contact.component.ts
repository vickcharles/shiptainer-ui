import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare var Rellax: any;
import { FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public rellax;
  formGroup: FormGroup;

  constructor(public http: HttpClient) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      message: new FormControl(''),
      country: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
   }

  parallax() {
    this.rellax = new Rellax('.rellax', {
      speed: 3
    });
  }

  ngOnInit() {}
}
