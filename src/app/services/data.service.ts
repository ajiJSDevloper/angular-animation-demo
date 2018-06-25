import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class PosterModal {
  page: any = {
    'content-items': {
      'content': []
    },
    "title": "",
    "total-content-items": "",
    "page-num-requested": "",
    "page-size-requested": "",
    "page-size-returned": "",
  }
}

const configUrl = {
  1: 'assets/data/page1.json',
  2: 'assets/data/page2.json',
  3: 'assets/data/page3.json'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public config: any = {
    page: 1,
  }
  constructor(private http: HttpClient) { }
  getData(page: any = 0) {
    if (page === 0) page = this.config.page
    return this.http.get(configUrl[page]);
  }
  search(term): Observable<any[]> {
    return Observable.create((observer) => {
      if (term === '') {
        observer.next([]);
        observer.complete();
        return
      }
      let keys = Object.keys(configUrl)
      this._recurCall(term, keys, [], (_result) => {
        observer.next([..._result])
        observer.complete()
      })
    })
  }
  _recurCall(term, keys, result, cb) {
    if (keys.length > 0) {
      let k = keys.shift()
      this.getData(k).subscribe((_d1: PosterModal) => {
        let result = [];
        let data = _d1.page['content-items'].content
        data = data.filter((_d) => {
          let name = _d.name.toUpperCase()
          if (name.indexOf(term.toUpperCase()) != -1) return _d
        })
        if (data.length > 0) result.push(...data)
        this._recurCall(term, keys, result, cb)
      })
    }
    else cb(result)
  }
}
