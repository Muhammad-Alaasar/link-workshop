import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Category, News, Story } from 'src/app/interfaces/news';
import { map } from 'rxjs';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss'],
})
export class TopNewsComponent implements OnInit {
  newsCategories: Category[] = [];
  news: Story[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getNews();
  }

  getCategories() {
    this.newsService
      .getCategories()
      .pipe(
        map((categories) => [
          { id: 0, name: 'All News', className: 'active' },
          ...categories.newsCategory,
        ])
      )
      .subscribe((res: Category[]) => (this.newsCategories = res));
  }

  getNews(categoryID?: number) {
    this.newsService
      .getNews()
      .pipe(
        map((news: News) =>
          news.News.filter(
            (story: Story) =>
              story.showOnHomepage === 'yes' &&
              (+story.categoryID == categoryID || !categoryID)
          ).sort(
            (a, b) =>
              new Date(b.publishedDate).getTime() -
              new Date(a.publishedDate).getTime()
          )
        )
      )
      .subscribe((res: Story[]) => {
        this.news = res;
        if (categoryID || categoryID == 0)
          this.newsCategories = this.newsCategories.map((cat) => ({
            ...cat,
            className: cat.id === categoryID ? 'active' : '',
          }));
      });
  }

  handleImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'https://placehold.jp/500x500.png';
  }
}
