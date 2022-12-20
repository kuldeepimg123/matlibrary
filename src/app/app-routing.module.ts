import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonCalenderComponent } from './button-calender/button-calender.component';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { HeaderComponent } from './header/header.component';
import { RippleComponent } from './ripple/ripple.component';
import { ScrollSpyComponent } from './scroll-spy/scroll-spy.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {path:'', redirectTo: '/header', pathMatch: 'full' },
  {path: 'header', component:HeaderComponent},
  {path:'button', component:ButtonComponent},
  {path:'button-calender', component:ButtonCalenderComponent},
  {path:'cards', component:CardsComponent},
  {path:'checkbox', component:CheckboxComponent},
  {path:'expansion', component:ExpansionComponent},
  {path:'form', component:FormComponent},
  {path:'grid', component:GridComponent},
  {path:'ripple', component:RippleComponent},
  {path:'scroll-spy', component:ScrollSpyComponent},
  {path:'spinner', component:SpinnerComponent},
  {path:'snackbar', component:SnackbarComponent},
  {path:'stepper', component:StepperComponent},
  {path:'table', component:TableComponent},
  {path:'tabs', component:TabsComponent},
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
