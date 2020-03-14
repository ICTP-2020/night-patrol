import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NightPatrolInformationReferralsPage } from './night-patrol-information-referrals.page';

describe('NightPatrolInformationReferralsPage', () => {
  let component: NightPatrolInformationReferralsPage;
  let fixture: ComponentFixture<NightPatrolInformationReferralsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightPatrolInformationReferralsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NightPatrolInformationReferralsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
