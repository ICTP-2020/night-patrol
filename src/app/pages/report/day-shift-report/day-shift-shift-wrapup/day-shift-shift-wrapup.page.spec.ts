import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayShiftShiftWrapupPage } from './day-shift-shift-wrapup.page';

describe('DayShiftShiftWrapupPage', () => {
  let component: DayShiftShiftWrapupPage;
  let fixture: ComponentFixture<DayShiftShiftWrapupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayShiftShiftWrapupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayShiftShiftWrapupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
