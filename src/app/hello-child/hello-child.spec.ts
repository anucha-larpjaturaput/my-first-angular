import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloChild } from './hello-child';

describe('HelloChild', () => {
  let component: HelloChild;
  let fixture: ComponentFixture<HelloChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
