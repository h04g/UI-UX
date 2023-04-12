import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './../../app-routing.module';
import { Router } from '@angular/router';
import { BookInfoPage } from './book-info.page';

describe('BookInfoPage', () => {
  let component: BookInfoPage;
  let fixture: ComponentFixture<BookInfoPage>;
  let router: Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInfoPage ],
      imports: [IonicModule.forRoot(),  AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BookInfoPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should bookinfo', () => {
    spyOn(router, 'navigate')

    expect(router.navigate).toHaveBeenCalledWith(['book-info']);
  });
});
