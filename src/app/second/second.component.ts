import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <mat-grid-list cols="3" rowHeight="250px">
      <mat-grid-tile
          *ngFor="let tile of tiles"
          [colspan]="tile.cols"
          [rowspan]="tile.rows">
        <img [src]="tile.image" [alt] = "tile.text">
      </mat-grid-tile>
    </mat-grid-list>

    
  `,
  styleUrls: ['second.component.css']
})
export class SecondComponent implements OnInit {

  mob1="https://www.fanbyte.com/wp-content/uploads/2019/02/image1-3.jpg";
  mob2="https://pbs.twimg.com/profile_images/1083774710393987072/2RRN02tg_400x400.jpg";
  mob3="https://randomc.net/image/Mob%20Psycho%20100/Mob%20Psycho%20100%20-%2006%20-%20Large%2001.jpg";
  mob4="https://media.comicbook.com/2019/01/mob-psycho-100-season-2-1153545-1280x0.jpeg";

  tiles = [
    {"text":"mob is a pure boy", "cols": 2, "rows": 2, "image":this.mob1},
    {"text": "the good boy!!!", "cols": 1, "rows": 2, "image": this.mob4},
    {"text": "mob, the best boy", "cols": 1, "rows": 1, "image":this.mob2},
    {"text": "my boy mob :')", "cols": 2, "rows": 1, "image": this.mob3},
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
