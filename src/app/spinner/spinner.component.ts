import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   // Progress----------
   mode: ProgressSpinnerMode = 'determinate';
   value = 50;

}
