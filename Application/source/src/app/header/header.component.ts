import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { IData } from '../model/IData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DataService]
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  navbarOpen = false;
  data: IData[] = null;

  ngOnInit() {
    // this.loadMockData();
  }

  showNavbar() {
    this.navbarOpen = !this.navbarOpen;
    console.log('clicked');
  }

  loadMockData() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      console.log('data', this.data);
    });
  }

}
