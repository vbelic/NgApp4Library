import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css'],
  styles: [`
    .default-wrapper {
      background-color: lime;
      padding: 10px;
    }
  `]
})
export class GenericComponent {
  @Input() optionTemplate!: TemplateRef<any>;
  
  ngAfterContentInit() {
  }
}
