import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule, Home } from 'lucide-angular';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{}"
  >
    @if(withIcon){
      <lucide-icon
        [img]="icon"
        class="button-icon"
        [size]="iconSize"
      ></lucide-icon>
    } @if(withLabel) {
      {{ label }}
    }
  </button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /**
   * The icon to use
   */
  icon: any = Home;

  /**
   * Button Type
   */
  @Input()
  type:
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'outline'
    | 'destructive'
    | 'constructive' = 'primary';

  /** How large should the button be? */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Whether to show an icon
   */
  @Input()
  withIcon: boolean = true;
  /**
   * Whether to show a label
   */
  @Input()
  withLabel: boolean = true;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get iconSize(): string {
    switch (this.size) {
      case 'small':
        return '14';
      case 'medium':
        return '16';
      case 'large':
        return '22';
      default:
        return '16';
    }
  }

  public get classes(): string[] {
    let mode = `storybook-button--${this.type}`;

    let paddingSize = this.withLabel ? '' : 'storybook-button--without-label';

    return [
      'storybook-button',
      `storybook-button--${this.size}`,
      mode,
      paddingSize,
    ];
  }
}
