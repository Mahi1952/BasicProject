import { Component } from '@angular/core';

@Component({
  selector: 'app-coditional-render',
  templateUrl: './coditional-render.component.html',
  styleUrl: './coditional-render.component.scss',
})
export class CoditionalRenderComponent {
  show: boolean = false;
  counter: number = 0;
  onClick() {
    this.show = !this.show;
  }
  counterInc() {
    this.counter++;
  }
}
