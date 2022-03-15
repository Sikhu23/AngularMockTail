import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloCockTailComponent } from './solo-cock-tail.component';

describe('SoloCockTailComponent', () => {
  let component: SoloCockTailComponent;
  let fixture: ComponentFixture<SoloCockTailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloCockTailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloCockTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
