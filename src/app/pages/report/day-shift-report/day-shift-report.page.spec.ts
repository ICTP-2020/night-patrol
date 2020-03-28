import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayShiftReportPage } from './day-shift-report.page';

describe('DayShiftReportPage', () => {
  let component: DayShiftReportPage;
  let fixture: ComponentFixture<DayShiftReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayShiftReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayShiftReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
