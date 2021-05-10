import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuttlecocksProductComponent } from './shuttlecocks-product.component';

describe('ShuttlecocksProductComponent', () => {
  let component: ShuttlecocksProductComponent;
  let fixture: ComponentFixture<ShuttlecocksProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuttlecocksProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuttlecocksProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
