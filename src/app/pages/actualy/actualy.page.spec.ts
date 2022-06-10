import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActualyPage } from './actualy.page';

describe('ActualyPage', () => {
  let component: ActualyPage;
  let fixture: ComponentFixture<ActualyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActualyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
