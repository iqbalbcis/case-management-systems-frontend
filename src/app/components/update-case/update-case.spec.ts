import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCase } from './update-case';

describe('UpdateCase', () => {
  let component: UpdateCase;
  let fixture: ComponentFixture<UpdateCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
