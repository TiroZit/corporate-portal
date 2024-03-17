import { useAuth } from '~/features/auth/model';

export default defineNuxtRouteMiddleware(async (to, _from) => {
	const { isAuth, getSession } = useAuth();

	if (isAuth && to.path === '/login') {
		return navigateTo(to.fullPath);
	}
	else if (!isAuth && to.path === '/') {
		await callOnce('session', () => {
			return getSession;
		});
	}
});
