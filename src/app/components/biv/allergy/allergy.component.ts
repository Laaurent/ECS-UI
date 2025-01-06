import { Component, Input } from '@angular/core';
import {
  LucideAngularModule,
  Stethoscope,
  Baby,
  ScanHeart,
  SquareActivity,
  Syringe,
  CircleAlert,
  TriangleAlert,
  Utensils,
} from 'lucide-angular';

@Component({
  selector: 'ecs-biv-allergy',
  imports: [LucideAngularModule],
  templateUrl: './allergy.component.html',
  styleUrl: './allergy.component.scss',
})
export class AllergyComponent {
  @Input()
  isSmall: boolean = false;

  public stethoscope = Stethoscope;
  public baby = Baby;
  public scanHeart = ScanHeart;
  public squareActivity = SquareActivity;
  public syringe = Syringe;
  public circleAlert = CircleAlert;
  public triangleAlert = TriangleAlert;
  public utensils = Utensils;
}
