import type { IApiProfile } from './types';
import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
	const client = await serverSupabaseClient(event);
	const body: IApiProfile = await readBody(event);

	const { data } = await client
		.from('profiles')
		.select('*')
		.eq('id', body.id);

	return {
		profile: data,
	};
});

// TODO:
// 1. Добавить запрос useFetch API в entity Profile, типы и тд
// const user = useSupabaseUser();
// const { data } = await useFetch('/api/profile', {
// 	method: 'POST',
// 	body: {
// 		id: user.value?.id,
// 	},
// });
// 2. Добавить store в entity Profile
// 3. Создать глобальный middleware, для всех страниц кроме авторизации (как с auth)
// 4. После запроса все записываем в store
// 5. Выводить данные из store (Sidebar, Profile ...)
