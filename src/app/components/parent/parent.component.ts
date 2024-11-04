import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  ringWasPlaced(evt: any) {
    console.log('Clap your hands... Ring was placed');
    console.log(evt);
  }
}
