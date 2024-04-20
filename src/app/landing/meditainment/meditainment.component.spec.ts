import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditainmentComponent } from './meditainment.component';

describe('MeditainmentComponent', () => {
  let component: MeditainmentComponent;
  let fixture: ComponentFixture<MeditainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeditainmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeditainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
