import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NightPatrolMaterialAidPage } from './night-patrol-material-aid.page';

describe('NightPatrolMaterialAidPage', () => {
  let component: NightPatrolMaterialAidPage;
  let fixture: ComponentFixture<NightPatrolMaterialAidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightPatrolMaterialAidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NightPatrolMaterialAidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
