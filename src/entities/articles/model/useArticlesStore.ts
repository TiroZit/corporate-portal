import { createArticle, getArticles } from '../api/apiArticles';
import type { IArticle, IArticlesState } from './typesArticles';

export const useArticlesStore = defineStore('articles', {
	state: (): IArticlesState => ({
		items: [],
		favorites: [],
	}),

	actions: {
		loadArticles() {
			getArticles((data) => {
				this.items = data;
			});
		},

		loadFavorites() {
			// getFavoriteArticles((data) => {
			// 	this.favorites = data;
			// });
		},

		addFavorite(id: number) {
			this.favorites.push(this.items.find(item => item.id === id)!);
		},

		removeFavorite(id: number) {
			this.favorites = this.favorites.filter(item => item.id !== id);
		},

		checkFavorite(id: number) {
			return this.favorites.some(item => item.id === id);
		},

		getArticle(id: number) {
			if (this.items.length === 0)
				this.loadArticles();

			return this.items.find(item => item.id === id);
		},

		addArticle(data: IArticle) {
			// this.items.push(data);

			createArticle(data);
			this.loadArticles();
		},
	},
});
