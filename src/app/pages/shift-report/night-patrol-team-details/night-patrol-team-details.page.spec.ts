import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NightPatrolTeamDetailsPage } from './night-patrol-team-details.page';

describe('NightPatrolTeamDetailsPage', () => {
  let component: NightPatrolTeamDetailsPage;
  let fixture: ComponentFixture<NightPatrolTeamDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightPatrolTeamDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NightPatrolTeamDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
