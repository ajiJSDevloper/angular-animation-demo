import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input() data:any=[]
  @Input() searched:boolean=false
  @Input() loading:boolean=false
  constructor() { }

  ngOnInit() {

  }
  updateUrl(ev) {
    ev.target.src = ev.target.baseURI + 'assets/poster/404.png'
  }

}
