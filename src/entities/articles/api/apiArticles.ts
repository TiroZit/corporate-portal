import type { IArticle, IArticleContent } from '../model/typesArticles';

export async function getArticles(callback: (data: IArticle[]) => void) {
	const client = useSupabaseClient<IArticle[]>();

	const { data } = await client
		.from('wiki_articles')
		.select(
			`
				id, title, content, created_at,
				author (id, avatar_url, first_name, last_name)
			`,
		);

	if (data === null || data.length === 0)
		return;

	// eslint-disable-next-line
	// @ts-expect-error
	callback(data);
}

export async function updateArticle(data: IArticleContent, id: string) {
	const client = useSupabaseClient<IArticleContent>();

	return client
		.from('wiki_articles')
		.update(data)
		.eq('id', id)
		.select();
}
