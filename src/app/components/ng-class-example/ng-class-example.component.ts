import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrl: './ng-class-example.component.scss',
})
export class NgClassExampleComponent {
  isBordered: boolean = false;

  classesObj = {
    bordered: false,
  };
  classList: string[] = [];

  constructor() {
    this.isBordered = true;
    this.classList = ['blue', 'round'];
    this.toggleBorder();
  }

  toggleBorder() {
    this.isBordered = !this.isBordered;

    this.classesObj = {
      bordered: this.isBordered,
    };
  }
}
