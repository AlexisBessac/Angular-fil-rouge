import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauUtilisateurComponent } from './tableau-utilisateur.component';

describe('TableauUtilisateurComponent', () => {
  let component: TableauUtilisateurComponent;
  let fixture: ComponentFixture<TableauUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauUtilisateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableauUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
