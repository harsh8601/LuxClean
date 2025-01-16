import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOut', [
  state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
  transition(':enter, :leave', [
    animate('700ms ease-in-out'),
  ]),
]);

export const slideDownAnimation = trigger('slideDown', [
  state('void', style({
    transform: 'translateY(-100%)',
    opacity: 0,
  })),
  transition(':enter', [
    animate('900ms ease-out', style({
      transform: 'translateY(-50%)',
      opacity: 1,
    })),
  ]),
  transition(':leave', [
    animate('900ms ease-in', style({
      transform: 'translateY(0)',
      opacity: 0,
    })),
  ]),
]);