import { Component, Input } from '@angular/core';
import { IdentificationComponent } from './identification/identification.component';
import { ConstantComponent } from './constant/constant.component';
import { AllergyComponent } from './allergy/allergy.component';

@Component({
  selector: 'ecs-biv',
  imports: [IdentificationComponent, ConstantComponent, AllergyComponent],
  templateUrl: './biv.component.html',
  styleUrl: './biv.component.scss',
})
export class BivComponent {
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
}
