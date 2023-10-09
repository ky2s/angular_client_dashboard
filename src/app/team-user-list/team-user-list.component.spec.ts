import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamUserListComponent } from './team-user-list.component';

describe('TeamUserListComponent', () => {
  let component: TeamUserListComponent;
  let fixture: ComponentFixture<TeamUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
