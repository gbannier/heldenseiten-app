import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasanderesyComponent } from './wasanderesy.component';

describe('WasanderesyComponent', () => {
  let component: WasanderesyComponent;
  let fixture: ComponentFixture<WasanderesyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WasanderesyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WasanderesyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
