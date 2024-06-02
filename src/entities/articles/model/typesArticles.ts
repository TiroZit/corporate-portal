export interface IArticleAuthor {
	id: string;
	first_name: string;
	last_name: string;
	avatar_url: string;
}

export interface IArticle {
	id: number;
	title: string;
	content: string;
	created_at: string;
	author: IArticleAuthor;
}

export type IArticleContent = Pick<IArticle, 'content'>;

export interface IArticlesState {
	items: IArticle[];
}
