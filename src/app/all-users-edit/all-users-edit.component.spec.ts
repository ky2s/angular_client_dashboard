import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersEditComponent } from './all-users-edit.component';

describe('AllUsersEditComponent', () => {
  let component: AllUsersEditComponent;
  let fixture: ComponentFixture<AllUsersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUsersEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
