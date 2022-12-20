import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private snb:MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar1() {
    this.snb.open("This is Basic Button", "Close");
  }
  openSnackBar2() {
    this.snb.open("This is Primary Button", "Close");
  }
  openSnackBar3() {
    this.snb.open("This is Accent Button4", "Close");
  }
  openSnackBar4() {
    this.snb.open("This is Warn Button", "Close");
  }
}
