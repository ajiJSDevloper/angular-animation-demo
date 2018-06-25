import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'poster-list-item',
  templateUrl: './poster-list-items.component.html',
  styleUrls: ['./poster-list-items.component.scss'],
  animations: [
    trigger('onEnterItem', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate(600, style({transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate(600, style({ transform: 'translate(360px)' }))
      ])
    ])
  ]
})
export class PosterListItemsComponent implements OnInit {
  @Input() data: any = {}
  constructor() { }

  ngOnInit() {

  }
  updateUrl(ev) {
    ev.target.src = ev.target.baseURI + 'assets/poster/404.png'
  }

}
