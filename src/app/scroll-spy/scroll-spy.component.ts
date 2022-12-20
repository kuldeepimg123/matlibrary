import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-spy',
  templateUrl: './scroll-spy.component.html',
  styleUrls: ['./scroll-spy.component.css']
})
export class ScrollSpyComponent implements OnInit {

  constructor() { }
  currentMenuId = "menu1";
  ngOnInit(): void {
  }

}
