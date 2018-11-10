import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataProviderService } from 'src/app/data-provider.service';
import { ListContainerComponent } from './list-container.component';
import { ScrollDispatchModule, ScrollDispatcher } from '@angular/cdk/scrolling';
describe('ListContainerComponent', () => {
  let comp: ListContainerComponent;
  let fixture: ComponentFixture<ListContainerComponent>;

  beforeEach(() => {
    const dataProviderServiceStub = {
      generateItems: () => ({}),
    };
    TestBed.configureTestingModule({
      declarations: [ListContainerComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: DataProviderService, useValue: dataProviderServiceStub },
      ],
      imports: [ScrollDispatchModule],
    });
    fixture = TestBed.createComponent(ListContainerComponent);
    comp = fixture.componentInstance;
  });

  test('can load instance', () => {
    expect(comp).toBeTruthy();
  });
});
