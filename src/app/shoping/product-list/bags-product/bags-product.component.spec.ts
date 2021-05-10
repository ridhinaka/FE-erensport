import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsProductComponent } from './bags-product.component';

describe('BagsProductComponent', () => {
  let component: BagsProductComponent;
  let fixture: ComponentFixture<BagsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagsProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
