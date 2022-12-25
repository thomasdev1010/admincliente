import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeClienteComponent } from './see-cliente.component';

describe('SeeClienteComponent', () => {
  let component: SeeClienteComponent;
  let fixture: ComponentFixture<SeeClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
