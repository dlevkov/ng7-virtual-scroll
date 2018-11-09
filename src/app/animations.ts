import {
  trigger,
  transition,
  style,
  stagger,
  animate,
  keyframes,
  query,
  state,
} from '@angular/animations';

export const items = trigger('items', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 }), { optional: true }),

    query(
      ':enter',
      stagger('3000ms', [
        animate(
          '2.6s ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({
              opacity: 0.5,
              transform: 'translateY(35px)',
              offset: 0.3,
            }),
            style({
              opacity: 1,
              transform: 'translateY(0)',
              offset: 1.0,
              background: 'black',
            }),
          ])
        ),
      ]),
      { optional: true }
    ),
    query(
      ':leave',
      stagger('3000ms', [
        animate(
          '2.6s ease-out',
          keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({
              opacity: 0.5,
              transform: 'translateY(35px)',
              offset: 0.3,
            }),
            style({
              opacity: 0,
              transform: 'translateY(-75%)',
              offset: 1.0,
            }),
          ])
        ),
      ]),
      { optional: true }
    ),
  ]),
]);
export const fadeInOut = trigger('fadeInOut', [
  state(
    'void',
    style({
      opacity: 0,
    })
  ),
  transition('void <=> *', animate(10000)),
]);
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
