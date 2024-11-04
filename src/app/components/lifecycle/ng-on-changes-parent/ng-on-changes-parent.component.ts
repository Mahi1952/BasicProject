import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes-parent',
  templateUrl: './ng-on-changes-parent.component.html',
  styleUrl: './ng-on-changes-parent.component.scss',
})
export class NgOnChangesParentComponent implements OnInit {
  display: boolean = false;
  name: string = '';
  comment: string = '';

  constructor() {}

  ngOnInit() {
    this.display = true;
    this.name = 'Anirban Ghosh';
    this.comment = 'I ummm... forgot';
  }
  setValues(namefld: any, commentfld: any): void {
    this.name = namefld.value;
    this.comment = commentfld.value;
  }

  toggle(): void {
    this.display = !this.display;
  }
}
