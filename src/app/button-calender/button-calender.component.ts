import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-calender',
  templateUrl: './button-calender.component.html',
  styleUrls: ['./button-calender.component.css']
})
export class ButtonCalenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Show Saturday and Sunday Only.
    return day !== 1 && day !== 2 && day !==3 && day !==4 && day !==5;
  };

}
