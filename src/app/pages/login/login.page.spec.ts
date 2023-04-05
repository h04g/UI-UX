import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go home page on home', () => {
    spyOn(router, 'navigate')
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
  it('should go auth', () => {
    spyOn(router, 'navigate')
    component.auth();
    expect(router.navigate).toHaveBeenCalledWith(['auth']);
  });
});
