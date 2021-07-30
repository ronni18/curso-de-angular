import { Component, OnInit,AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import SwiperCore, { Navigation } from 'swiper/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: SwiperCore;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }
  
 

}
