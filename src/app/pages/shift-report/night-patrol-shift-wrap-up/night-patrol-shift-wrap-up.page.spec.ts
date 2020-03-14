import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NightPatrolShiftWrapUpPage } from './night-patrol-shift-wrap-up.page';

describe('NightPatrolShiftWrapUpPage', () => {
  let component: NightPatrolShiftWrapUpPage;
  let fixture: ComponentFixture<NightPatrolShiftWrapUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightPatrolShiftWrapUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NightPatrolShiftWrapUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
