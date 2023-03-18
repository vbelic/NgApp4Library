import { NgModule } from '@angular/core';
import { MyLbComponent } from './components/my-lb/my-lb.component';
import { MyLbcComponent } from './components/my-lbc/my-lbc.component';



@NgModule({
  declarations: [
    MyLbComponent,
    MyLbcComponent
  ],
  imports: [
  ],
  exports: [
    MyLbComponent,
    MyLbcComponent
  ]
})
export class MyLbModule { }
