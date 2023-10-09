import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSettingsEditComponent } from './app-settings-edit.component';

describe('AppSettingsEditComponent', () => {
  let component: AppSettingsEditComponent;
  let fixture: ComponentFixture<AppSettingsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSettingsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSettingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
