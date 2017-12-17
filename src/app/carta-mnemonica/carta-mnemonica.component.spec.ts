import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaMnemonichaComponent } from './carta-mnemonicha.component';

describe('CartaMnemonichaComponent', () => {
  let component: CartaMnemonichaComponent;
  let fixture: ComponentFixture<CartaMnemonichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaMnemonichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaMnemonichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
