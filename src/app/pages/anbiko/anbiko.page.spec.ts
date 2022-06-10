import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnbikoPage } from './anbiko.page';

describe('AnbikoPage', () => {
  let component: AnbikoPage;
  let fixture: ComponentFixture<AnbikoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnbikoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnbikoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
