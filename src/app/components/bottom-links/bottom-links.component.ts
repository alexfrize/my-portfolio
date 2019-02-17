import { Component, OnInit } from '@angular/core';
import { imgPath } from '../../constants/constants';

@Component({
  selector: 'app-bottom-links',
  templateUrl: './bottom-links.component.html',
  styleUrls: ['./bottom-links.component.scss']
})
export class BottomLinksComponent implements OnInit {
  imgPath = imgPath;
  alexFrizePhoto = imgPath + 'alexfrize.jpg';
  linkedInLogoUrl = 'linkedin_logo.png';
  gitHubLogoUrl = 'github_logo.png';
  constructor() {}

  ngOnInit() {}
}
