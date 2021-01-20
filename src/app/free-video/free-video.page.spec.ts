import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreeVideoPage } from './free-video.page';

describe('FreeVideoPage', () => {
  let component: FreeVideoPage;
  let fixture: ComponentFixture<FreeVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreeVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
