<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { updateProfile } from '~/entities/profile/api/apiProfile';
import FormFieldText from '~/shared/ui/form/FormFieldText.vue';
import { useToast } from '~/shared/ui/toast';

export interface IAboutFormProps {
	profile: IProfile | null;
	refresh: () => Promise<void>;
}

const props = defineProps<IAboutFormProps>();

const validationSchema = toTypedSchema(z.object({
	first_name: z.string({ required_error: 'Это поле обязательно' }),
	last_name: z.string({ required_error: 'Это поле обязательно' }),
	middle_name: z.string({ required_error: 'Это поле обязательно' }),
	birthday: z.string({ required_error: 'Это поле обязательно' }),
}));
const isInert = ref(true);

const { toast } = useToast();

const { handleSubmit, isSubmitting, resetForm } = useForm({ validationSchema });

const onSubmit = handleSubmit(async (values) => {
	const { error } = await updateProfile(values);

	if (error) {
		toast({
			title: 'Ошибка!',
			description: error.message,
			variant: 'destructive',
		});

		return;
	}

	await props.refresh();

	toast({
		title: 'Успех!',
		description: 'Данные профиля обновлены',
		variant: 'success',
	});
});

function handleEdit() {
	isInert.value = !isInert.value;

	resetForm({
		values: {
			first_name: props.profile?.first_name,
			last_name: props.profile?.last_name,
			middle_name: props.profile?.middle_name,
			birthday: props.profile?.birthday,
		},
	});
}
</script>

<template>
	<Form
		:handler-submit="onSubmit"
		:is-submitting="isSubmitting"
		class="grow"
	>
		<template #fields>
			<div class="grid grid-cols-3 gap-4" :inert="isInert">
				<FormFieldText
					name="last_name"
					label="Фамилия"
					placeholder="Введите фамилию"
					:value="profile?.last_name"
				/>

				<FormFieldText
					name="first_name"
					label="Имя"
					placeholder="Введите имя"
					:value="profile?.first_name"
				/>

				<FormFieldText
					name="middle_name"
					label="Отчество"
					placeholder="Введите отчество"
					:value="profile?.middle_name"
				/>

				<FormFieldText
					name="birthday"
					label="День рождения"
					:value="profile?.birthday"
					type="date"
				/>
			</div>
		</template>

		<template #button-submit>
			<div class="flex gap-3">
				<ProfileEditButton
					:is-edit="isInert"
					@click="handleEdit"
				/>

				<ProfileSaveButton
					v-show="!isInert"
					:is-submitting="isSubmitting"
				/>
			</div>
		</template>
	</Form>
</template>
