import type { Models } from 'nuxt-appwrite';

const { account } = useAppwrite();

export const useAuth = defineStore('auth', () => {
	// STATE
	const current = ref<Models.Session | null>(null);

	// GETTERS
	const isAuth = computed(() => {
		return !!current.value;
	});

	const getSession = computed(() => {
		account.getSession('current')
			.then((user) => {
				current.value = user;
			}).catch(() => {
				navigateTo('auth/login');
			});
	});

	// ACTIONS

	return {
		current,

		isAuth,
		getSession,
	};
});
