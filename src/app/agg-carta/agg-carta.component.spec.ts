import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggCartaComponent } from './agg-carta.component';

describe('AggCartaComponent', () => {
  let component: AggCartaComponent;
  let fixture: ComponentFixture<AggCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
