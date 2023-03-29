import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { OvverideComponent } from './ovveride.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLbModule } from 'my-lb';

@NgModule({
  declarations: [
    AppComponent,
    OvverideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MyLbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
