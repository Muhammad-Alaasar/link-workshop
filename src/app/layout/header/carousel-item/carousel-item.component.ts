import { Component, Input } from '@angular/core';
import { Slide } from 'src/app/interfaces/slide';

@Component({
    selector: 'app-carousel-item',
    templateUrl: './carousel-item.component.html',
    styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
    @Input()
    slide!: Slide;
}
