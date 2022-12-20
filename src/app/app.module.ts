import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { ButtonCalenderComponent } from './button-calender/button-calender.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { RippleComponent } from './ripple/ripple.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ScrollSpyComponent } from './scroll-spy/scroll-spy.component';
import { SpinnerComponent } from './spinner/spinner.component';


import {CdkTableModule} from '@angular/cdk/table';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import {MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule} from "@angular/material/grid-list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRippleModule } from "@angular/material/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import {SimpleScrollSpyModule} from "angular-simple-scroll-spy";
import { HeaderComponent } from './header/header.component';

import { NgMonthPickerModule } from "ng-month-picker";


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardsComponent,
    CheckboxComponent,
    ExpansionComponent,
    FormComponent,
    GridComponent,
    ButtonCalenderComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    RippleComponent,
    SnackbarComponent,
    ScrollSpyComponent,
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule,
    CdkStepperModule,
    MatCheckboxModule,
    MatExpansionModule,
    CdkTableModule,
    MatIconModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatRippleModule,
    MatSnackBarModule,
    SimpleScrollSpyModule,
    NgMonthPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
