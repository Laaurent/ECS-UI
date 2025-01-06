import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecs-biv-constant',
  imports: [],
  templateUrl: './constant.component.html',
  styleUrl: './constant.component.scss',
})
export class ConstantComponent {
  @Input()
  isSmall: boolean = false;
}
