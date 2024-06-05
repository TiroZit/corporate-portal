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

		getArticle(id: number) {
			if (this.items.length === 0)
				this.loadArticles();

			return this.items.find(item => item.id === id);
		},

		addArticle(data: IArticle) {
			this.items.push(data);
		},
	},
});