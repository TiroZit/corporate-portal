import { getArticles } from '../api/apiArticles';
import type { IArticle, IArticlesState } from './typesArticles';

export const useArticlesStore = defineStore('articles', {
	state: (): IArticlesState => ({
		items: [],
	}),

	actions: {
		loadArticles() {
			getArticles((data) => {
				this.items = data;
			});
		},

		addArticle(data: IArticle) {
			this.items.push(data);
		},
	},
});
