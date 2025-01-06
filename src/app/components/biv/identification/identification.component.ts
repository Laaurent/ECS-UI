import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  LucideAngularModule,
  ChevronLeft,
  ChevronRight,
  Search,
  BadgeCheck,
} from 'lucide-angular';

@Component({
  selector: 'ecs-biv-identification',
  imports: [LucideAngularModule, DatePipe],
  templateUrl: './identification.component.html',
  styleUrl: './identification.component.scss',
})
export class IdentificationComponent {
  @Input()
  isSmall: boolean = false;

  @Input()
  nameUsed: string = '-';

  @Input()
  birthName: string = '-';

  @Input()
  firstnameUsed: string = '-';

  @Input()
  birthFirstname: string = '-';

  @Input()
  gender: 'Féminin' | 'Masculin' = 'Masculin';

  @Input()
  birthDate: any = null;

  @Input()
  ins: string = '-';

  @Input()
  ipp: string = '-';

  @Input()
  insIsVerified: boolean = false;

  @Input()
  age: number = 0;

  @Input()
  weight: number = 0;

  @Input()
  bed: string = '-';

  @Input()
  date: any = null;

  public datePipe = new DatePipe('fr-FR');

  public iconLeft = ChevronLeft;
  public iconRight = ChevronRight;
  public iconSearch = Search;
  public iconCheck = BadgeCheck;
}
