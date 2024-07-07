import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../interfaces/news';

@Pipe({
    name: 'categoryID',
})
export class CategoryIDPipe implements PipeTransform {
    transform(value: string, categories: Category[], ...args: unknown[]): string | undefined {
        return categories.find((item) => item.id == +value)?.name;
    }
}
