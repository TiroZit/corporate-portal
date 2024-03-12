<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { OAuthProvider } from 'appwrite';
import { useForm } from 'vee-validate';
import * as z from 'zod';

const validationSchema = toTypedSchema(z.object({
	email: z.string({ required_error: 'Это поле обязательно' }).email(),
	password: z.string({ required_error: 'Это поле обязательно' }).min(8),
}));

const { toast } = useToast();

const { handleSubmit, isSubmitting } = useForm({ validationSchema });

const onSubmit = handleSubmit(async (values) => {
	try {
		await account.createEmailPasswordSession(values.email, values.password);
		toast({
			title: 'Успех!',
			description: 'Вы успешно вошли в систему',
			variant: 'success',
		});

		await navigateTo('/');
	}
	catch (error: any) {
		if (error.code === 401 && error.type === 'user_invalid_credentials') {
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
});

async function loginYandex() {
	try {
		await account.createOAuth2Session(OAuthProvider.Yandex, 'http://localhost:3000/');
	}
	catch (error: any) {
		toast({
			title: 'Ошибка!',
			description: error.message,
			variant: 'destructive',
		});
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
