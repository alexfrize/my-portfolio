import { Component } from '@angular/core';
import { slideBetweenPagesAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideBetweenPagesAnimation]
})
export class AppComponent {
  prepareRoute(outlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
