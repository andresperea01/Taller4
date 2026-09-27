import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchitecturePage } from './architecture.page';

describe('ArchitecturePage', () => {
  let fixture: ComponentFixture<ArchitecturePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ArchitecturePage] }).compileComponents();
    fixture = TestBed.createComponent(ArchitecturePage);
    fixture.detectChanges();
  });

  it('muestra el flujo de renderizado de la SPA', () => {
    expect(fixture.nativeElement.querySelectorAll('li').length).toBe(3);
  });
});
