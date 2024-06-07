import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRetardComponent } from './ajout-retard.component';

describe('AjoutRetardComponent', () => {
  let component: AjoutRetardComponent;
  let fixture: ComponentFixture<AjoutRetardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutRetardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
