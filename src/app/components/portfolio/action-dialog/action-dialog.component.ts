import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.scss']
})
export class ActionDialogComponent implements OnInit, AfterViewInit {
  videoLink: string;
  player;
  constructor(
    public dialogRef: MatDialogRef<ActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngAfterViewInit() {
    if (!(<any>window).YT) {
      const playerApiScript = document.createElement('script');
      playerApiScript.type = 'text/javascript';
      playerApiScript.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(playerApiScript);
    }
  }

  createPlayer(videoId) {
    const ww = <any>window.innerWidth;
    const maxVideoWidth = 1090;
    const w = ww - 200 > maxVideoWidth ? maxVideoWidth : ww - 200;
    const h = Math.round((w / 16) * 9);
    this.player = new (<any>window).YT.Player('player', {
      height: h,
      width: w,
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showInfo: 0
      }
    });
  }

  ngOnInit() {
    if ((<any>window).YT) {
      this.createPlayer(this.data.linkData);
    }

    (<any>window).onYouTubeIframeAPIReady = () => {
      this.createPlayer(this.data.linkData);
    };
  }

  closeModal() {
    this.dialogRef.close();
  }
}
