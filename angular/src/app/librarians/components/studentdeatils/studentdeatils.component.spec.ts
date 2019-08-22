import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdeatilsComponent } from './studentdeatils.component';

describe('StudentdeatilsComponent', () => {
  let component: StudentdeatilsComponent;
  let fixture: ComponentFixture<StudentdeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
