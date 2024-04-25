import type { IProfile, IProfilePersonal } from '../model/typesProfile';

export async function postProfile() {
	const client = useSupabaseClient<IProfile>();
	const user = useSupabaseUser();

	return useLazyAsyncData<IProfile>('profile', async () => {
		const { data } = await client
			.from('users')
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

export async function updateProfile(data: IProfilePersonal) {
	const client = useSupabaseClient<IProfilePersonal>();
	const user = useSupabaseUser();

	return client
		.from('users')
		.update(data)
		.eq('id', user.value?.id || '')
		.select();
}
