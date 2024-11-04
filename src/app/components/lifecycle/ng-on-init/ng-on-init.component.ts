import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrl: './ng-on-init.component.scss',
})
export class NgOnInitComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck
{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes');
    console.log(changes);
  }
  @Input() var: number = 10;

  ngDoCheck(): void {
    console.log('Do Check');
  }
  ngOnInit(): void {
    console.log('On init');
    console.log(this.var);
    console.log('On init');
  }

  ngOnDestroy(): void {
    console.log('On destroy');
  }
}
