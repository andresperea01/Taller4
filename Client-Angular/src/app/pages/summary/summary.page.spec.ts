import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryPage } from './summary.page';

describe('SummaryPage', () => {
  let fixture: ComponentFixture<SummaryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SummaryPage] }).compileComponents();
    fixture = TestBed.createComponent(SummaryPage);
    fixture.detectChanges();
  });

  it('muestra las capacidades de la aplicación', () => {
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(3);
  });
});
