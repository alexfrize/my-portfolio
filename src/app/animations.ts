import {
  trigger,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';

export const slideBetweenPagesAnimation = trigger('routeAnimations', [
  transition(
    `AboutPage => *,
    PortfolioPage => ExperiencePage,
    PortfolioPage => ContactsPage,
    ExperiencePage => ContactsPage`,
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({ left: '100%', opacity: 0 })]),
      group([
        query(':leave', [
          animate('1500ms ease-in-out', style({ left: '-100%', opacity: 0 }))
        ]),
        query(':enter', [
          animate('1500ms ease-in-out', style({ left: '0%', opacity: 1 }))
        ])
      ])
    ]
  ),

  transition(
    `ContactsPage => *,
    ExperiencePage => PortfolioPage,
    ExperiencePage => AboutPage,
    PortfolioPage => AboutPage`,
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({ left: '-100%', opacity: 0 })]),
      group([
        query(':leave', [
          animate('1500ms ease-in-out', style({ left: '100%', opacity: 0 }))
        ]),
        query(':enter', [
          animate('1500ms ease-in-out', style({ left: '0%', opacity: 1 }))
        ])
      ])
    ]
  )
]);
