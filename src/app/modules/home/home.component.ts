import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  loaderId: string = "homepage";

  constructor() {
  }

  ngAfterViewInit() {
  }
}
