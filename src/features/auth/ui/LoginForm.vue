<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { useToast } from '~/shared/ui/toast';

const validationSchema = toTypedSchema(z.object({
	email: z.string({ required_error: 'Это поле обязательно' }).email(),
	password: z.string({ required_error: 'Это поле обязательно' }),
}));

const { toast } = useToast();
const { auth } = useSupabaseClient();

const { handleSubmit, isSubmitting } = useForm({ validationSchema });

const onSubmit = handleSubmit(async (values) => {
	const { error } = await auth.signInWithPassword({ email: values.email, password: values.password });

	if (error) {
		if (error.status === 400) {
			toast({
				title: 'Ошибка!',
				description: 'Неверный email или пароль',
				variant: 'destructive',
			});
		}
		else {
			toast({
				title: 'Ошибка!',
				description: error.message,
				variant: 'destructive',
			});
		}
	}
	else {
		toast({
			title: 'Успех!',
			description: 'Вы успешно вошли',
			variant: 'success',
		});
		await navigateTo('/');
	}
});

async function loginYandex() {
	const { error } = await auth.signInWithOAuth({
		provider: 'github',
		options: {
			redirectTo: 'http://localhost:3000',
		},
	});

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
			description: 'Вы успешно вошли',
			variant: 'success',
		});
		await navigateTo('/');
	}
}
</script>

<template>
	<CardAuth>
		<Form
			button-submit-text="Войти"
			:handler-submit="onSubmit"
			:is-submitting="isSubmitting"
		>
			<template #title>
				Вход
			</template>

			<template #fields>
				<FormFieldEmail />

				<FormFieldPassword />
			</template>
		</Form>
		<ButtonSignInYandex @click="loginYandex" />
	</CardAuth>
</template>
