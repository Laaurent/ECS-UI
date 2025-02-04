import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantComponent } from './constant.component';

describe('ConstantComponent', () => {
  let component: ConstantComponent;
  let fixture: ComponentFixture<ConstantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
