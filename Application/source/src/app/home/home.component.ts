import { Component, OnInit, ViewChild } from '@angular/core';
import { IData } from '../model/IData';
import { DataService } from '../services/data.service';
import { load } from '@angular/core/src/render3';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}

  data: any;
  list: any[];

  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  @ViewChild('galleryOne') galleryOne;

  ngOnInit() {
    this.loadData();
  }

  unSlick() {
    this.galleryOne.unslick();
  }

  addSlide() {
    // this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  removeSlide() {
    this.data.length = this.data.length - 1;
  }
  slickInit(e) {
    console.log('slick initialized');
  }
  breakpoint(e) {
    console.log('breakpoint');
  }
  afterChange(e) {
    console.log('afterChange');
  }
  beforeChange(e) {
    console.log('beforeChange');
  }

  loadData() {
    this.dataService.getData().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.data = data['hits'];
      // this.load();
      console.log('data', data);
    });
  }
}
