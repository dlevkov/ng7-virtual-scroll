import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';


export const scrollIn = trigger('scrollAnimation', [
  transition(':enter', [
    style({
      transform: 'translateY(-200%) scale(1.5)',
      background: 'black',
      color: 'transparent',
    }),
    animate('1s 200ms ease-out'),
  ]),
  transition(':leave', [
    animate('0.5s 200ms ease-out', style({ transform: 'translateY(100%)' })),
  ]),
]);
