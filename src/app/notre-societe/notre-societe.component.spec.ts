import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreSocieteComponent } from './notre-societe.component';

describe('NotreSocieteComponent', () => {
  let component: NotreSocieteComponent;
  let fixture: ComponentFixture<NotreSocieteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotreSocieteComponent]
    });
    fixture = TestBed.createComponent(NotreSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
