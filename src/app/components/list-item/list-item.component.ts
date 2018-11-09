import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import * as fromAnimations from '../../animations';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  animations: [fromAnimations.scrollIn, fromAnimations.fadeInOut],
})
export class ListItemComponent implements OnInit {
  @Input() item: { title: string; content: string };
  constructor() {}

  ngOnInit() {}

}
