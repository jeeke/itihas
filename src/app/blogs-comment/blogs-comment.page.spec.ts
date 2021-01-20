import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogsCommentPage } from './blogs-comment.page';

describe('BlogsCommentPage', () => {
  let component: BlogsCommentPage;
  let fixture: ComponentFixture<BlogsCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsCommentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogsCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
