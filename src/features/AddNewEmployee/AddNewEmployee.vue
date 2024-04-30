<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { useSupabaseAdminClient } from '~/shared/model/useSupabaseAdminClient';
import FormFieldText from '~/shared/ui/form/FormFieldText.vue';
import { useToast } from '~/shared/ui/toast';

const validationSchema = toTypedSchema(z.object({
	first_name: z.string({ required_error: 'Это поле обязательно' }),
	last_name: z.string({ required_error: 'Это поле обязательно' }),
	middle_name: z.string({ required_error: 'Это поле обязательно' }),
	birthday: z.string({ required_error: 'Это поле обязательно' }),
	email: z.string({ required_error: 'Это поле обязательно' }).email(),
	password: z.string({ required_error: 'Это поле обязательно' }),
}));

const { toast } = useToast();
const { adminClient } = useSupabaseAdminClient();
const { addEmployee } = useEmployeesStore();
const { handleSubmit, isSubmitting } = useForm({ validationSchema });

const supabaseAdminClient = await adminClient();

const onSubmit = handleSubmit(async (values) => {
	const { error } = await supabaseAdminClient.auth.admin.createUser({
		email: values.email,
		password: values.password,
		email_confirm: true,
		user_metadata: {
			first_name: values.first_name,
			last_name: values.last_name,
			middle_name: values.middle_name,
			birthday: values.birthday,
			division: 'Default',
			position: 'Default',
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
			description: 'Вы успешно добавили сотрудника',
			variant: 'success',
		});

		addEmployee({
			first_name: values.first_name,
			last_name: values.last_name,
			middle_name: values.middle_name,
			birthday: values.birthday,
			email: values.email,
			division: 'Default',
			position: 'Default',
		});
	}
});
</script>

<template>
	<Dialog>
		<DialogTrigger as-child>
			<Button>
				Добавить сотрудника
			</Button>
		</DialogTrigger>
		<DialogContent class="sm:max-w-[425px]">
			<DialogHeader>
				<DialogTitle>Добавить сотрудника</DialogTitle>
			</DialogHeader>
			<Form
				button-submit-text="Добавить"
				:handler-submit="onSubmit"
				:is-submitting="isSubmitting"
			>
				<template #fields>
					<FormFieldText
						name="last_name"
						label="Фамилия"
						placeholder="Введите фамилию"
					/>

					<FormFieldText
						name="first_name"
						label="Имя"
						placeholder="Введите имя"
					/>

					<FormFieldText
						name="middle_name"
						label="Отчество"
						placeholder="Введите отчество"
					/>

					<FormFieldText
						name="birthday"
						label="День рождения"
						type="date"
					/>

					<FormFieldEmail />

					<FormFieldPassword />
				</template>
			</Form>
			<!-- <DialogFooter>
				<Button type="submit">
					Save changes
				</Button>
			</DialogFooter> -->
		</DialogContent>
	</Dialog>
</template>
