import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMarvelComponent } from './lista-marvel.component';

describe('ListaMarvelComponent', () => {
  let component: ListaMarvelComponent;
  let fixture: ComponentFixture<ListaMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
