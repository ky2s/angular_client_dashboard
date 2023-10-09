import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOwnedComponent } from './company-owned.component';

describe('CompanyOwnedComponent', () => {
  let component: CompanyOwnedComponent;
  let fixture: ComponentFixture<CompanyOwnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyOwnedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyOwnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
