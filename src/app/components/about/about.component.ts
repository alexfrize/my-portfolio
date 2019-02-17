import { Component, OnInit } from '@angular/core';
import { imgPath } from '../../constants/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  imgPath = imgPath;
  alexFrizePhoto = imgPath + 'alexfrize.jpg';
  constructor() {}

  ngOnInit() {}
}
