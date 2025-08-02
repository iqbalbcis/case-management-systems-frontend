import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAll } from './alert-all';

describe('AlertAll', () => {
  let component: AlertAll;
  let fixture: ComponentFixture<AlertAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertAll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
