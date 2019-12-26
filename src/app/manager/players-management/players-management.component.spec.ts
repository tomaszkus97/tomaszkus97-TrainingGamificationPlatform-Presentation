import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersManagementComponent } from './players-management.component';

describe('PlayersManagementComponent', () => {
  let component: PlayersManagementComponent;
  let fixture: ComponentFixture<PlayersManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
