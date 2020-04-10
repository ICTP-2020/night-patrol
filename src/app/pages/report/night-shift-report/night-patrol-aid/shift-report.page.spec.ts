import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShiftReportPage } from './shift-report.page';

describe('ShiftReportPage', () => {
  let component: ShiftReportPage;
  let fixture: ComponentFixture<ShiftReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
