import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThemeToggleComponent } from './app-theme-toggle.component';

describe('AppThemeToggleComponent', () => {
  let component: AppThemeToggleComponent;
  let fixture: ComponentFixture<AppThemeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppThemeToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppThemeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
