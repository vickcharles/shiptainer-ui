import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
// import * as AOS from 'aos';
declare var Rellax: any;
declare var Swipe: any;
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public rellax;
  public rellax2;

  public products = [
    {
      title: 'New Containers',
      text: 'New Containers we can provide you with all types of ISO containers including supply in the equipment in the equipement in the color of your choice. As a costumer, you can benefit from our stock of new containers located in our key points: Ecuador, Peru, Colombia, and the USA, offering you the immediate delivery at competitive prices. Our expertise in the market us a reliable supplier.',
      img: '../assets/img/carousel-1.jpg'
    },
    {
      title: 'Example',
      text: 'New Containers we can provide you with all types of ISO containers including supply in the equipment in the equipement in the color of your choice. As a costumer, you can benefit from our stock of new containers located in our key points: Ecuador, Peru, Colombia, and the USA, offering you the immediate delivery at competitive prices. Our expertise in the market us a reliable supplier.',
      img: '../assets/img/carousel-1.jpg'
    },
    {
      title: 'Example',
      text: 'New Containers we can provide you with all types of ISO containers including supply in the equipment in the equipement in the color of your choice. As a costumer, you can benefit from our stock of new containers located in our key points: Ecuador, Peru, Colombia, and the USA, offering you the immediate delivery at competitive prices. Our expertise in the market us a reliable supplier.',
      img: '../assets/img/carousel-1.jpg'
    },
    {
      title: 'Example',
      text: 'New Containers we can provide you with all types of ISO containers including supply in the equipment in the equipement in the color of your choice. As a costumer, you can benefit from our stock of new containers located in our key points: Ecuador, Peru, Colombia, and the USA, offering you the immediate delivery at competitive prices. Our expertise in the market us a reliable supplier.',
      img: '../assets/img/carousel-1.jpg'
    },
    {
      title: 'Example',
      text: 'New Containers we can provide you with all types of ISO containers including supply in the equipment in the equipement in the color of your choice. As a costumer, you can benefit from our stock of new containers located in our key points: Ecuador, Peru, Colombia, and the USA, offering you the immediate delivery at competitive prices. Our expertise in the market us a reliable supplier.',
      img: '../assets/img/carousel-1.jpg'
    },
  ];

  public containers = [
    {
      img: '../assets/img/container-1.png',
      text: 'Dry new and used 40ft Containers'
    },
    {
      img: '../assets/img/container-2.png',
      text: 'Dry new and used 20ft Containers'
    },
    {
      img: '../assets/img/container-3.png',
      text: 'Dry new and used Reefer Containers'
    }
  ];

  constructor() {}

  ngOnInit() {
    AOS.init();
    this.parallax();
  }

  parallax() {
    this.rellax = new Rellax('.text-principal', {
      speed: 3
    });

    this.rellax = new Rellax('.imagenes', {
      speed: -1,
      center: true
    });
  }
}

