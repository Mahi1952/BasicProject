import { Component } from '@angular/core';

@Component({
  selector: 'app-testers',
  templateUrl: './testers.component.html',
  styleUrl: './testers.component.scss',
})
export class TestersComponent {
  display: boolean = true;
  num: number = 100;
  onToggle() {
    if (this.display) this.display = false;
    else this.display = true;
  }
}
