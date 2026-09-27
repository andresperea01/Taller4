import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetricsPage } from './metrics.page';

describe('MetricsPage', () => {
  let fixture: ComponentFixture<MetricsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [MetricsPage] }).compileComponents();
    fixture = TestBed.createComponent(MetricsPage);
    fixture.detectChanges();
  });

  it('muestra tres métricas de comparación', () => {
    expect(fixture.nativeElement.querySelectorAll('tbody tr').length).toBe(3);
  });
});
