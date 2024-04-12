import type { IProfile } from '../model/typesProfile';

export async function postProfile() {
	const client = useSupabaseClient();
	const user = useSupabaseUser();

	return await useLazyAsyncData<IProfile>('profile', async () => {
		const { data } = await client
			.from('profiles')
			.select('*')
			.eq('id', user.value?.id || '');

		if (data === null || data.length === 0)
			return {} as IProfile;

		return data[0] as IProfile;
	}, {
		getCachedData(key, nuxtApp) {
			return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
		},
	});
}
