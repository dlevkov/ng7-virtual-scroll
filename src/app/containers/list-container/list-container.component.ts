import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataProviderService } from 'src/app/data-provider.service';
@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent implements OnInit {
  items: Observable<{ title: string; content: string }[]>;
  constructor(private service: DataProviderService) {}

  ngOnInit() {
    this.items = of(this.generateItems(this.generateMaxNumber()));
  }
  generateMaxNumber(): number {
    return Math.floor(Math.random() * 500 + 1);
  }
  generateItems(numberOfItems: number): { title: string; content: string }[] {
    return this.service.generateItems(numberOfItems);
  }
}
