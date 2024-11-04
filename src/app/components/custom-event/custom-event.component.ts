import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-event',
  templateUrl: './custom-event.component.html',
  styleUrl: './custom-event.component.scss',
})
export class CustomEventComponent {
  constructor() {
    let ee = new EventEmitter();
    ee.subscribe((name: string) => console.log(`${name}`));
    ee.emit('Anirban');
  }
}
