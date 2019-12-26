import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachGroupsComponent } from './coach-groups.component';

describe('CoachGroupsComponent', () => {
  let component: CoachGroupsComponent;
  let fixture: ComponentFixture<CoachGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
