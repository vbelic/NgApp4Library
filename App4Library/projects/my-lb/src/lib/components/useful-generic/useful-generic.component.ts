import { Component, ContentChild, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'useful-generic',
  templateUrl: './useful-generic.component.html',
  styleUrls: ['./useful-generic.component.css'],
  styles: [`
    .default-wrapper {
      background-color: lime;
      padding: 10px;
    }
  `]
})
export class UsefulGenericComponent {
  @ContentChild('wrapper', {static: true}) wrapper!: TemplateRef<any>;
  @ViewChild('defaultWrapper', {static: true}) defaultWrapper!: TemplateRef<any>;
  
  ngAfterContentInit() {
    if (!this.wrapper) {
      this.wrapper = this.defaultWrapper;
    }
  }
}
