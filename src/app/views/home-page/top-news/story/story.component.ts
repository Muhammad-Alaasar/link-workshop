import { Component, Input } from '@angular/core';
import { Category, Story } from 'src/app/interfaces/news';

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.scss'],
})
export class StoryComponent {
    @Input()
    story!: Story;
    @Input()
    newsCategories: Category[] = [];

    handleImageError(event: Event) {
        (event.target as HTMLImageElement).src = 'https://placehold.jp/500x500.png';
    }
}
