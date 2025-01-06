import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BivComponent } from './biv.component';

describe('BivComponent', () => {
  let component: BivComponent;
  let fixture: ComponentFixture<BivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
