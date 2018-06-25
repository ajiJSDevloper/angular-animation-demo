import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms'
import { Observable } from 'rxjs';
import { DataService, PosterModal } from '../../services/data.service'
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('searchBoxAnimation', [
      state('hide', style({
        width: '100%',
        opacity: 1
      })),
      state('show', style({
        opacity: 0,
        width: '0',
      })),
      transition('show => hide', [
        animate(500, keyframes([
          style({ opacity: 0, offset: 0, }),
          style({ opacity: 0, width: '50%', offset: 0.5 }),
          style({ opacity: 1, width: '100%', offset: 1 }),
        ]))
      ]),
      transition('hide => show', [
        animate(500, keyframes([
          style({ opacity: 0, offset: 0 })
        ]))
      ])

    ]),
    trigger('searchTextAnimation', [
      state('show', style({
        width: '100%',
        display: 'block'
      })),
      state('hide', style({
        width: '0',
        display: 'none',
      })),
      transition('show <=> hide', [
        animate(500)
      ])
    ]),
    trigger('searchListAnimation', [
      state('show', style({
        height: '100%',
        display: 'block'
      })),
      state('hide', style({
        height: '0%',
        display: 'none',
      })),
      transition('show <=> hide', [
        animate(500)
      ])
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  searchState: string = 'hide'
  searchListToggler: string = 'hide'
  searchText: FormControl = new FormControl(null)
  results:any=[];
  _loading:boolean = false
  searched:boolean = false
  searchForm:FormGroup
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchText:this.searchText
    })
    
    this.searchText.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(inputVal => this.doSearch(inputVal)))
      .subscribe((_d)=>{
        this.results=[]
        if(_d.length > 0){
          this.results.push(..._d)
        }
        else this.results = []
        this._loading = false
      },(_err)=>{
        this.results = []
        this._loading = false
      })
  }
  doSearch(term){
    this.searchListToggler = 'show'
    this._loading = true
    this.searched = true
    // if (term === '') this.searchListToggler = 'hide'
    return this.dataService.search(term)
  }
  toggleSearch() {
    this.searchListToggler = 'hide'
    this.searchState = (this.searchState === 'show' ? 'hide' : 'show')
    if (this.searchState == 'show' && this.results.length > 0){
      this.searchListToggler = 'show'             
    }
  }
  focusText() {
    // this.searchListToggler = 'show'
  }
  focusOutText() {
    // this.searchListToggler = 'hide'
  }
  searchOpt(ev) {
    ev.preventDefault()
  }
}
