import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartComponent } from './shop-cart.component';

describe('ShopCartComponent', () => {
  let component: ShopCartComponent;
  let fixture: ComponentFixture<ShopCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCartComponent]
    });
    fixture = TestBed.createComponent(ShopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
