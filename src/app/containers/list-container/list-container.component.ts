import { Component, OnInit } from '@angular/core';
import { NgxLoremIpsumService } from 'ngx-lorem-ipsum';
import { Observable, of } from 'rxjs';
import * as animations from '../../animations';
@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent implements OnInit {
  items: Observable<{ title: string; content: string }[]>;
  constructor(private service: NgxLoremIpsumService) {}

  ngOnInit() {
    this.items = of(this.generateItems(this.generateMaxNumber()));
  }
  generateMaxNumber(): number {
    return Math.floor(Math.random() * 500 + 1);
  }
  generateItems(numberOfItems: number): { title: string; content: string }[] {
    return Array.from({ length: numberOfItems }).map((_, i) => ({
      title: this.service.get(1),
      content: this.service.getRandom(1, i, 0),
    }));
  }


}
