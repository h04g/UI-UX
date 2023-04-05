import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthPage } from './auth.page';

describe('AuthPage', () => {
  let component: AuthPage;
  let fixture: ComponentFixture<AuthPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go home page on login', () => {
    spyOn(router, 'navigate')
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
  it('should go home page on register', () => {
    spyOn(router, 'navigate')
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });
});
