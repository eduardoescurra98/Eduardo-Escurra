import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasMainComponent } from './peliculas-main.component';

describe('PeliculasMainComponent', () => {
  let component: PeliculasMainComponent;
  let fixture: ComponentFixture<PeliculasMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
