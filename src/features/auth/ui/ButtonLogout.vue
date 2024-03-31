<script setup lang="ts">
import { useToast } from '~/shared/ui/toast';

const { auth } = useSupabaseClient();
const { toast } = useToast();

async function logout() {
	const { error } = await auth.signOut();

	if (error) {
		toast({
			title: 'Ошибка!',
			description: error.message,
			variant: 'destructive',
		});
	}
	else {
		toast({
			title: 'Успех!',
			description: 'Вы вышли из профиля',
			variant: 'success',
		});
		await navigateTo('/login');
	}
}
</script>

<template>
	<Button variant="destructive" @click="logout">
		Выйти из профиля
	</Button>
</template>
