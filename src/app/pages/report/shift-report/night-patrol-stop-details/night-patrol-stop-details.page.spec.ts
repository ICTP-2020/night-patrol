import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NightPatrolStopDetailsPage } from './night-patrol-stop-details.page';

describe('NightPatrolStopDetailsPage', () => {
  let component: NightPatrolStopDetailsPage;
  let fixture: ComponentFixture<NightPatrolStopDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightPatrolStopDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NightPatrolStopDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
