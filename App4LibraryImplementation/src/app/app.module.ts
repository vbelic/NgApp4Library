import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLbModule } from 'my-lb';
import { OvverideComponent } from './ovveride.component';

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
