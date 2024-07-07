import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/header/navbar/navbar.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ServicesComponent } from './views/home-page/services/services.component';
import { TopNewsComponent } from './views/home-page/top-news/top-news.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryIDPipe } from './pipes/category-id.pipe';
import { StoryComponent } from './views/home-page/top-news/story/story.component';
import { CarouselItemComponent } from './layout/header/carousel-item/carousel-item.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
        HomePageComponent,
        ServicesComponent,
        TopNewsComponent,
        CategoryIDPipe,
        StoryComponent,
        CarouselItemComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
