import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktaillistComponent } from './mocktaillist.component';

describe('MocktaillistComponent', () => {
  let component: MocktaillistComponent;
  let fixture: ComponentFixture<MocktaillistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MocktaillistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MocktaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
