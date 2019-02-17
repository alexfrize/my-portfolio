import { Component, OnInit } from '@angular/core';
import { imgPath } from '../../constants/constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  imgPath = imgPath;
  items = [
    {
      url: 'coding_2017_city_life_business.jpg',
      description:
        'Design (Photoshop), HTML, CSS (SASS), BEM, Bootstrap-SASS, jQuery, jQuery Mobile'
    },
    {
      url: 'coding_2018_stickerwin.jpg',
      description: 'Design (Photoshop), HTML, CSS, jQuery, BEM'
    },
    {
      url: 'coding_2017_city_life_customers.jpg',
      description:
        'Design (Photoshop), HTML, CSS (SASS), BEM, Bootstrap-SASS, jQuery, jQuery Mobile'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
