import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {
  formGroup: FormGroup;

  foods: any[] = [
    {value: 'asia', viewValue: 'Asia'},
    {value: 'europe', viewValue: 'Europe'},
    {value: 'north america', viewValue: 'North america'},
    {value: 'latin america', viewValue: 'Latin america'}
  ];

  isLoading = false;

  containers: any[] = [
    {value: 'dry', viewValue: 'Dry'},
    {value: 'dpecial', viewValue: 'Special'},
    {value: 'reefer', viewValue: 'Reefer'},
  ];

  comercial = '';

  constructor(public http: HttpClient, private router: Router) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      cellPhone: new FormControl('', [Validators.required]),
      nameOfCompany: new FormControl('', [
        Validators.required
      ]),
      continent: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      typeOfContainer: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.isLoading = true;
    // TODO: Use EventEmitter with form value
    console.warn(this.formGroup.value);
    this.http.post('https://vs-rest-api.herokuapp.com/api/nodemailer/sh', this.formGroup.value).subscribe( res => {
      console.log('Email sent');
      if (this.formGroup.get('continent').value === 'asia') {
        this.comercial = 'y.seung@shiptainer.com';
      } else if (this.formGroup.get('continent').value === 'europe' || this.formGroup.get('continent').value === 'latin america') {
         this.comercial = 'a.vila@shiptainer.com';
      } else if (this.formGroup.get('continent').value === 'north america') {
        this.comercial = 'r.patrick@shiptainer.com';
      }

      localStorage.setItem('comercialEmail', this.comercial);
      this.router.navigateByUrl('/thanks-you');
      this.formGroup.reset();
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      alert('Something went wrong 😰 😰 😰, reload the page and try again');
      this.formGroup.reset();
    });
  }
}
