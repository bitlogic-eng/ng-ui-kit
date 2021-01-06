import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitlogicComponent } from './bitlogic.component';

describe('BitlogicComponent', () => {
  let component: BitlogicComponent;
  let fixture: ComponentFixture<BitlogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitlogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitlogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
