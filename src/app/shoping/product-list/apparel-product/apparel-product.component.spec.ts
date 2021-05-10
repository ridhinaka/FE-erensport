import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparelProductComponent } from './apparel-product.component';

describe('ApparelProductComponent', () => {
  let component: ApparelProductComponent;
  let fixture: ComponentFixture<ApparelProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApparelProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
