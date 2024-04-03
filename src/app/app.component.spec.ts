import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /education when education link is clicked', () => {
    const educationLink = fixture.debugElement.query(By.css('a[routerLink="/education"]'));
    educationLink.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(router.url).toBe('/education');
  });

  it('should switch language to "pl" when PL button is clicked', () => {
    const plButton = fixture.debugElement.query(By.css('button:contains("PL")'));
    plButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.selectedLanguage).toBe('pl');
  });

  it('should switch language to "en" when EN button is clicked', () => {
    const enButton = fixture.debugElement.query(By.css('button:contains("EN")'));
    enButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.selectedLanguage).toBe('en');
  });
});
