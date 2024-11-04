import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes-child',
  templateUrl: './ng-on-changes-child.component.html',
  styleUrl: './ng-on-changes-child.component.scss',
})
export class NgOnChangesChildComponent implements OnChanges {
  @Input('name') name: string = '';
  @Input('comment') comment: string = '';

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    console.log('Changes', changes);
    if (changes['comment']) console.log(changes['comment'].previousValue);
  }
}
