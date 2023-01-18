import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RombusComponent } from './rombus.component';

describe('RombusComponent', () => {
  let component: RombusComponent;
  let fixture: ComponentFixture<RombusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RombusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RombusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
