import { Component } from '@angular/core';

@Component({
  selector: 'app-style-directive',
  templateUrl: './style-directive.component.html',
  styleUrls: ['./style-directive.component.scss'],
})
export class StyleDirectiveComponent {
  color: string = '#ff0fff';
  font: string = '';
  size: string = '30px';

  textColor: string = '#000000';
  textSize: string = '16px';

  style = {
    'background-color': this.color,
    'border-radius': '50%',
    border: '1px solid #000',
    width: this.size,
    height: this.size,
  };

  textStyle = {
    color: this.textColor,
    'font-size': this.textSize,
  };

  changeStyle() {
    this.style['background-color'] = this.color;
    this.style['width'] = this.size;
    this.style['height'] = this.size;
  }

  changeTextStyle() {
    this.textStyle['color'] = this.textColor;
    this.textStyle['font-size'] = this.textSize;
  }
}
