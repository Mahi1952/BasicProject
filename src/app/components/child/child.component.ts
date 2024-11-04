import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Output() putRingOnIt: EventEmitter<string>;

  constructor() {
    this.putRingOnIt = new EventEmitter<string>();
  }

  liked() {
    this.putRingOnIt.emit('oh oh oh');
  }
}
