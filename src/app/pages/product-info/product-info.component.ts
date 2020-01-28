import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import * as AOS from 'aos';
declare var Rellax: any;

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  public rellax;

  public carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 3000, initialDelay: 3000},
    loop: false,
    touch: true,
    velocity: 0.5,
    slide: 1,
    point: { visible: true }
  };

  public carouselConfig2: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 2, all: 0 },
    load: 3,
    interval: {timing: 3000, initialDelay: 3000},
    loop: false,
    touch: true,
    velocity: 0.5,
    slide: 1,
    point: { visible: true }
  };

  public products = [
    {
      title: 'New Containers',
      text: 'New Containers we can provide you with all types of ISO containers including supply in the equipment in the equipement in the color of your choice. As a costumer, you can benefit from our stock of new containers located in our key points: Ecuador, Peru, Colombia, and the USA, offering you the immediate delivery at competitive prices. Our expertise in the market us a reliable supplier.',
      img: '../assets/img/reefer.jpg'
    },
    {
      title: 'Example',
      text: 'New Containers we can provide you with all types of ISO containers including supply in the equipment in the equipement in the color of your choice. As a costumer, you can benefit from our stock of new containers located in our key points: Ecuador, Peru, Colombia, and the USA, offering you the immediate delivery at competitive prices. Our expertise in the market us a reliable supplier.',
      img: '../assets/img/reefer.jpg'
    },
    {
      title: 'Example',
      text: 'New Containers we can provide you with all types of ISO containers including supply in the equipment in the equipement in the color of your choice. As a costumer, you can benefit from our stock of new containers located in our key points: Ecuador, Peru, Colombia, and the USA, offering you the immediate delivery at competitive prices. Our expertise in the market us a reliable supplier.',
      img: '../assets/img/reefer.jpg'
    },
    {
      title: 'Example',
      text: 'New Containers we can provide you with all types of ISO containers including supply in the equipment in the equipement in the color of your choice. As a costumer, you can benefit from our stock of new containers located in our key points: Ecuador, Peru, Colombia, and the USA, offering you the immediate delivery at competitive prices. Our expertise in the market us a reliable supplier.',
      img: '../assets/img/reefer.jpg'
    },
    {
      title: 'Example',
      text: 'New Containers we can provide you with all types of ISO containers including supply in the equipment in the equipement in the color of your choice. As a costumer, you can benefit from our stock of new containers located in our key points: Ecuador, Peru, Colombia, and the USA, offering you the immediate delivery at competitive prices. Our expertise in the market us a reliable supplier.',
      img: '../assets/img/reefer.jpg'
    },

  ];

  public products2 = [
    {
      title: 'New Containers',
      text: 'Long: 5.898m / Anch: 2.350 m / Alt: 2.237 m / Cap Cúbica: 33 m / Tara: 2.2t',
      img: '../assets/img/20x8.6.png'
    },
    {
      title: 'Example',
      text: 'Long: 5.898m / Anch: 2.350 m / Alt: 2.237 m / Cap Cúbica: 33 m / Tara: 2.2t',
      img: '../assets/img/40x8.6.png'
    },
   
    {
      title: 'Example',
      text: 'Long: 5.898m / Anch: 2.350 m / Alt: 2.237 m / Cap Cúbica: 33 m / Tara: 2.2t',      img: '../assets/img/45x8.6.png'
    },
    {
      title: 'Example',
      text: 'Long: 5.898m / Anch: 2.350 m / Alt: 2.237 m / Cap Cúbica: 33 m / Tara: 2.2t',      img: '../assets/img/40x9.6.png'
    },
    {
      title: 'Example',
      text: 'Long: 5.898m / Anch: 2.350 m / Alt: 2.237 m / Cap Cúbica: 33 m / Tara: 2.2t',      img: '../assets/img/45x9.6.png'
    },

  ];

 

  constructor() { }

  parallax(){
    this.rellax = new Rellax('.rellax', {
      speed: 3
    });
  }

  ngOnInit() {
    AOS.init();
    this.parallax();
  }

}
