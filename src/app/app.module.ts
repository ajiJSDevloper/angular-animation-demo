import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { DataService} from './services/data.service'
import { AppComponent } from './app.component'
import { HeaderComponent } from './componnets/header/header.component';
import { PosterListComponent } from './componnets/poster-list/poster-list.component';
import { PosterListItemsComponent } from './componnets/poster-list-items/poster-list-items.component';
import { SearchListComponent } from './componnets/search-list/search-list.component';
import { LoaderComponent } from './componnets/loader/loader.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PosterListComponent,
    PosterListItemsComponent,
    SearchListComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
