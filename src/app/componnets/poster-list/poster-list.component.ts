import { Component, OnInit } from '@angular/core';
import { DataService, PosterModal } from '../../services/data.service'

@Component({
  selector: 'app-poster-list',
  templateUrl: './poster-list.component.html',
  styleUrls: ['./poster-list.component.scss']
})
export class PosterListComponent implements OnInit {
  posters:any = [] 
  pageConfig:any ={}
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.config.page=1
    this.getData()
  }
  getData(){
    this.dataService.getData().subscribe((_d: PosterModal) => {
      if (!this.pageConfig['total-content-items']){
        this.pageConfig['total-content-items'] = parseInt(_d.page['total-content-items'])
        if (_d.page['page-size-returned'])
        this.pageConfig['remaining'] = this.pageConfig['total-content-items'] - parseInt(_d.page['page-size-returned'])
      }
      else this.pageConfig['remaining'] -= parseInt(_d.page['page-size-returned'])
      this.posters.push(..._d.page['content-items'].content)
    },(_err)=>{
      console.error(_err)
    })
  }
  onScroll(){
    if (this.pageConfig['remaining'] > 0){
      this.dataService.config.page++;
      this.getData()
    }
  }

}
