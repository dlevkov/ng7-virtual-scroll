import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListContainerComponent } from './list-container.component';
import { DataProviderService } from 'src/app/data-provider.service';

describe('ListContainerComponent', () => {
  let component: ListContainerComponent;
  let fixture: ComponentFixture<ListContainerComponent>;
  const mockService = { generateItems: num => {} };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListContainerComponent],
      providers: [{ provide: DataProviderService, UseValue: mockService }],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
