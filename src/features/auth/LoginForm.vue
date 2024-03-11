<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { account } from '@/shared/libs/appwrite';

const validationSchema = toTypedSchema(z.object({
	email: z.string({ required_error: 'Это поле обязательно' }).email(),
	password: z.string({ required_error: 'Это поле обязательно' }).min(8),
}));

const { handleSubmit, isSubmitting } = useForm({ validationSchema });

const onSubmit = handleSubmit(async (values) => {
	try {
		await account.createEmailPasswordSession(values.email, values.password);
	}
	catch (error) {
		console.error(error);
	}
	// finally {
	// }
});
</script>

<template>
	<Form
		button-submit-text="Войти"
		:handler-submit="onSubmit"
		:is-submitting="isSubmitting"
	>
		<template #title>
			Добро пожаловать в Корпоративный портал!
		</template>

		<template #fields>
			<FormFieldEmail />

			<FormFieldPassword />
		</template>
	</Form>
</template>
