import { Injectable } from '@angular/core';
import { NgxLoremIpsumService } from 'ngx-lorem-ipsum/lib/ngx-lorem-ipsum.service';


@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor(private service: NgxLoremIpsumService) {}
  generateItems(numberOfItems: number): { title: string; content: string }[] {
    return Array.from({ length: numberOfItems }).map((_, i) => ({
      title: this.service.get(1),
      content: this.service.getRandom(1, i, 0),
    }));
  }
}
