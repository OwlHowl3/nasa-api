import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureRandomComponent } from './picture-random.component';

describe('PictureRandomComponent', () => {
  let component: PictureRandomComponent;
  let fixture: ComponentFixture<PictureRandomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureRandomComponent]
    });
    fixture = TestBed.createComponent(PictureRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
