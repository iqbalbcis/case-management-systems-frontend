import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menuandheader } from './menuandheader';

describe('Menuandheader', () => {
  let component: Menuandheader;
  let fixture: ComponentFixture<Menuandheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menuandheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menuandheader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
