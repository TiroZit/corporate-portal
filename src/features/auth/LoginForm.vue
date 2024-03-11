<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { account } from '@/shared/libs/appwrite';

const validationSchema = toTypedSchema(z.object({
	email: z.string({ required_error: 'Это поле обязательно' }).email(),
	password: z.string({ required_error: 'Это поле обязательно' }).min(8),
}));

const { push } = useRouter();
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

		push({ name: 'index' });
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
	</CardAuth>
</template>
