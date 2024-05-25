import type { IArticle } from '../model/typesArticles';

export async function getArticles(callback: (data: IArticle[]) => void) {
	const client = useSupabaseClient<IArticle[]>();

	const { data } = await client
		.from('wiki_articles')
		.select(
			`
				id, title, content,
				author (id, avatar_url, first_name, last_name)
			`,
		);

	if (data === null || data.length === 0)
		return;

	// eslint-disable-next-line
	// @ts-expect-error
	callback(data);
}
