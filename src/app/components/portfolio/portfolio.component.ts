import { Component, OnInit } from '@angular/core';
import { imgPath } from '../../constants/constants';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ActionDialogComponent } from './action-dialog/action-dialog.component';

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
  linkData: string;
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
          action: WATCH_DEMO,
          linkData: 'w6odVN8_Y3I'
        },
        {
          url: 'apps_2019_coffeensk.jpg',
          description:
            'Design (Photoshop), React, Redux, HTML, CSS (SASS), BEM, Bootstrap-SASS, jQuery',
          action: VISIT_WEBSITE,
          linkData: 'http://www.coffeensk.com/'
        },
        {
          url: 'apps_2017_03_moneytimer.jpg',
          description: 'Design (Photoshop), Angular 2, RxJS, HTML, CSS (SASS)',
          action: WATCH_DEMO,
          linkData: '84QVhdPHQkA'
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
          action: VISIT_WEBSITE,
          linkData:
            'http://portfolio.alexanderfrize.com/websites/citylife/business/'
        },
        {
          url: 'coding_2018_stickerwin.jpg',
          description: 'Design (Photoshop), HTML, CSS, jQuery, BEM',
          action: VISIT_WEBSITE,
          linkData: 'http://portfolio.alexanderfrize.com/websites/stickerwin/'
        },
        {
          url: 'coding_2017_city_life_customers.jpg',
          description:
            'Design (Photoshop), HTML, CSS (SASS), BEM, Bootstrap-SASS, jQuery, jQuery Mobile',
          action: VISIT_WEBSITE,
          linkData:
            'http://portfolio.alexanderfrize.com/websites/citylife/card/'
        }
      ]
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  doAction(action: string, linkData: string) {
    switch (action) {
      case VISIT_WEBSITE:
        window.open(linkData);
        break;

      case WATCH_DEMO:
        this.dialog.open(ActionDialogComponent, {
          data: { action, linkData }
        });
        break;
    }
  }
}
