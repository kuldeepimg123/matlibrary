import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snb:MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snb.open("This is SnackBar", "Close", {"duration": 2000});
  }

}
