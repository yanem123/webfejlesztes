import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenekComponent } from './zenek.component';

describe('ZenekComponent', () => {
  let component: ZenekComponent;
  let fixture: ComponentFixture<ZenekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZenekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZenekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
