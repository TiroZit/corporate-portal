export interface IArticleAuthor {
	id: string;
	first_name: string;
	last_name: string;
	avatar_url: string;
}

export interface IArticle {
	id: string;
	title: string;
	content: string;
	author: IArticleAuthor;
}

export interface IArticlesState {
	items: IArticle[];
}
