import { Component, OnInit } from '@angular/core';
import { imgPath } from '../../constants/constants';

const VISIT_WEBSITE = 'Visit website';
const WATCH_DEMO = 'Watch demo';

interface IPortfolio {
  blockName: string;
  items: IPortfolioItem[];
}

interface IPortfolioItem {
  url: string;
  description: string;
  action: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  imgPath = imgPath;
  portfolio: IPortfolio[] = [
    {
      blockName: 'Web Applications',
      items: [
        {
          url: 'apps_2017_02_mini_crm.jpg',
          description: 'Design (Photoshop), React, Redux,  HTML, CSS (SASS)',
          action: WATCH_DEMO
        },
        {
          url: 'apps_2019_coffeensk.jpg',
          description:
            'Design (Photoshop), React, Redux, HTML, CSS (SASS), BEM, Bootstrap-SASS, jQuery',
          action: VISIT_WEBSITE
        },
        {
          url: 'apps_2017_03_moneytimer.jpg',
          description: 'Design (Photoshop), Angular 2, RxJS, HTML, CSS (SASS)',
          action: WATCH_DEMO
        }
      ]
    },
    {
      blockName: 'Landing Pages',
      items: [
        {
          url: 'coding_2017_city_life_business.jpg',
          description:
            'Design (Photoshop), HTML, CSS (SASS), BEM, Bootstrap-SASS, jQuery, jQuery Mobile',
          action: VISIT_WEBSITE
        },
        {
          url: 'coding_2018_stickerwin.jpg',
          description: 'Design (Photoshop), HTML, CSS, jQuery, BEM',
          action: VISIT_WEBSITE
        },
        {
          url: 'coding_2017_city_life_customers.jpg',
          description:
            'Design (Photoshop), HTML, CSS (SASS), BEM, Bootstrap-SASS, jQuery, jQuery Mobile',
          action: VISIT_WEBSITE
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
