import { Component } from '@angular/core';
import { UsefulGenericComponent } from 'my-lb';

@Component({
  selector: 'app-ovveride',
  templateUrl: './ovveride.component.html',
  styles: [`
  p {
    font-family: Lato;
  }
  
  .my-very-own-wrapper {
    background-color: darkorange;
    padding: 15px;
    text-align: center;
  }`]
})
export class OvverideComponent  {
  
  buttonClick() {
    alert('John Doe was here!');
  }
}