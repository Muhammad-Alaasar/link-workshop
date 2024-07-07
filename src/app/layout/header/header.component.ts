import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Slide } from 'src/app/interfaces/slide';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    slides: Slide[] = [];
    constructor(private carouselService: CarouselService) {}

    ngOnInit(): void {
        this.getAllSlides();
    }

    getAllSlides() {
        return this.carouselService
            .getSlides()
            .pipe(map((arr) => arr.sort((a, b) => b.order - a.order)))
            .subscribe((res: Slide[]) => (this.slides = res));
    }
}
