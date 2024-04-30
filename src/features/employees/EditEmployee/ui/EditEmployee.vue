<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import FormFieldText from '~/shared/ui/form/FormFieldText.vue';
import { useEditEmployee } from '../model/useEditEmployee';

export interface IEditEmployeeProps {
	employee: IProfile;
}

const { employee } = defineProps<IEditEmployeeProps>();

const validationSchema = toTypedSchema(z.object({
	first_name: z.string({ required_error: 'Это поле обязательно' }),
	last_name: z.string({ required_error: 'Это поле обязательно' }),
	middle_name: z.string({ required_error: 'Это поле обязательно' }),
	birthday: z.string({ required_error: 'Это поле обязательно' }),
	email: z.string({ required_error: 'Это поле обязательно' }).email(),
	// password: z.string({ required_error: 'Это поле обязательно' }),
}));

const { editEmployee } = useEditEmployee();
const { handleSubmit, isSubmitting } = useForm({ validationSchema });

const onSubmit = handleSubmit(async (values) => {
	await editEmployee(employee.id || '', values);
});
</script>

<template>
	<Dialog>
		<DialogTrigger as-child>
			<Button size="icon">
				<Icon name="ic:baseline-edit" size="20" class="shrink-0" />
			</Button>
		</DialogTrigger>
		<DialogContent class="sm:max-w-[425px]">
			<DialogHeader>
				<DialogTitle>Редактирование сотрудника</DialogTitle>
			</DialogHeader>
			<Form
				button-submit-text="Сохранить"
				:handler-submit="onSubmit"
				:is-submitting="isSubmitting"
			>
				<template #fields>
					<FormFieldText
						name="last_name"
						label="Фамилия"
						placeholder="Введите фамилию"
						:value="employee?.last_name"
					/>

					<FormFieldText
						name="first_name"
						label="Имя"
						placeholder="Введите имя"
						:value="employee?.first_name"
					/>

					<FormFieldText
						name="middle_name"
						label="Отчество"
						placeholder="Введите отчество"
						:value="employee?.middle_name"
					/>

					<FormFieldText
						name="birthday"
						label="День рождения"
						type="date"
						:value="employee?.birthday"
					/>

					<FormFieldEmail
						:value="employee?.email"
					/>

					<!-- <FormFieldPassword /> -->
				</template>
			</Form>
		</DialogContent>
	</Dialog>
</template>
