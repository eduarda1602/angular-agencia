import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCarrosel } from './section-carrosel';

describe('SectionCarrosel', () => {
  let component: SectionCarrosel;
  let fixture: ComponentFixture<SectionCarrosel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionCarrosel],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionCarrosel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
