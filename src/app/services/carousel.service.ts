import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Slide } from '../interfaces/slide';

@Injectable({
    providedIn: 'root',
})
export class CarouselService {
    slides: Slide[] = [
        {
            id: 0,
            category: 'Outsource',
            title: 'Global IT Experts',
            brief: 'On-shore, offshore, nearshore and hybrid models for dedicated development, product building and staff augmentation.',
            colorCode: 'FF7C16',
            imgUrl: '../../assets/images/slides/silde-1.png',
            itemUrl: '',
            videoUrl: '',
            order: 1,
        },
        {
            id: 1,
            category: 'Marking',
            title: '25 Years of Business Growth',
            brief: 'Link Development, the global technology solutions provider and an A15 company, unveiled today that it has recently marked its Silver Jubilee anniversary.',
            colorCode: 'F215B6',
            imgUrl: '../../assets/images/slides/silde-3.png',
            itemUrl: '',
            videoUrl: '',
            order: 3,
        },
        {
            id: 2,
            category: 'Trendy Inside-Out',
            title: 'Crafty Minds Reshaping Future',
            brief: 'Link Development,Our people, processes, and technologies thrive on digital breakthroughs.',
            colorCode: 'A6E51C',
            imgUrl: '../../assets/images/slides/silde-2.png',
            itemUrl: '',
            videoUrl: '',
            order: 2,
        },
    ];
    constructor() {}

    getSlides(): Observable<Slide[]> {
        return of<Slide[]>(this.slides);
    }
}
