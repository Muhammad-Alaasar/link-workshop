export interface News {
    News: Story[];
}

export interface Story {
    id: string;
    title: string;
    content: string;
    categoryID: string;
    urlToImage: string;
    description: string;
    publishedDate: string;
    showOnHomepage: string;
}

export interface NewsCategories {
    newsCategory: Category[];
}

export interface Category {
    id: number;
    name: string;
    className?: string;
}
