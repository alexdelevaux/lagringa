
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BarranavComponent } from './barranav.component';

describe('BarranavComponent', () => {
  let component: BarranavComponent;
  let fixture: ComponentFixture<BarranavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [BarranavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarranavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
