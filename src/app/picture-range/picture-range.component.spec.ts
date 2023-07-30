import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureRangeComponent } from './picture-range.component';

describe('PictureRangeComponent', () => {
  let component: PictureRangeComponent;
  let fixture: ComponentFixture<PictureRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PictureRangeComponent]
    });
    fixture = TestBed.createComponent(PictureRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
