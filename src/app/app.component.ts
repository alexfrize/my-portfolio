import { Component } from '@angular/core';
import { slideBetweenPagesAnimation } from './animations';
import { Router } from '@angular/router';
import { menuItems } from './components/top-menu/top-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideBetweenPagesAnimation]
})
export class AppComponent {
  menuUrls: string[];

  constructor(private router: Router) {
    this.menuUrls = menuItems.map((el: any) => el.url);
  }

  prepareRoute(outlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  sw(direction: string) {
    const cu = window.location.href;
    const currentUrl = cu.slice(cu.lastIndexOf('/'));
    const currentUrlIndex = this.menuUrls.indexOf(currentUrl);

    let newUrl = '';
    switch (direction) {
      case 'right':
        if (currentUrlIndex === 0) {
          newUrl = this.menuUrls[this.menuUrls.length - 1];
        } else {
          newUrl = this.menuUrls[currentUrlIndex - 1];
        }
        break;

      case 'left':
        if (currentUrlIndex === this.menuUrls.length - 1) {
          newUrl = this.menuUrls[0];
        } else {
          newUrl = this.menuUrls[currentUrlIndex + 1];
        }
        break;
    }
    this.router.navigate([newUrl]);
  }
}
