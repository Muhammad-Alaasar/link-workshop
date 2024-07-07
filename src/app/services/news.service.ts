import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News, NewsCategories } from '../interfaces/news';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    constructor(private _http: HttpClient) {}

    getCategories(): Observable<NewsCategories> {
        return this._http.get<NewsCategories>('https://api.npoint.io/91298d970c27e9a06518');
    }

    getNews(): Observable<News> {
        return this._http.get<News>('https://api.npoint.io/d275425a434e02acf2f7');
    }
}
