import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRetardComponent } from './modifier-retard.component';

describe('ModifierRetardComponent', () => {
  let component: ModifierRetardComponent;
  let fixture: ComponentFixture<ModifierRetardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierRetardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
