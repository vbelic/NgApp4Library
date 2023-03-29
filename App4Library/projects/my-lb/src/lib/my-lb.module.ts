import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GenericComponent } from './components/generic/generic.component';
import { MyLbComponent } from './components/my-lb/my-lb.component';
import { MyLbcComponent } from './components/my-lbc/my-lbc.component';
import { UsefulGenericComponent } from './components/useful-generic/useful-generic.component';



@NgModule({
  declarations: [
    MyLbComponent,
    MyLbcComponent,
    UsefulGenericComponent,
    GenericComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    MyLbComponent,
    MyLbcComponent,
    UsefulGenericComponent,
    GenericComponent,
  ]
})
export class MyLbModule { }
