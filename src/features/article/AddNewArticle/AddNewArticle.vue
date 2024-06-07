<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import FormFieldText from '~/shared/ui/form/FormFieldText.vue';
import { useToast } from '~/shared/ui/toast';

const validationSchema = toTypedSchema(z.object({
	title: z.string({ required_error: 'Это поле обязательно' }),
}));

const { toast } = useToast();
const { addArticle } = useArticlesStore();
const { handleSubmit, isSubmitting } = useForm({ validationSchema });

const onSubmit = handleSubmit(async (values) => {
	toast({
		title: 'Успех!',
		description: 'Вы успешно добавили статью',
		variant: 'success',
	});

	addArticle({
		title: values.title,
	});
});
</script>

<template>
	<Dialog>
		<DialogTrigger as-child>
			<Button>
				Добавить статью
			</Button>
		</DialogTrigger>
		<DialogContent class="sm:max-w-[425px]">
			<DialogHeader>
				<DialogTitle>Добавить статью</DialogTitle>
			</DialogHeader>
			<Form
				button-submit-text="Добавить"
				:handler-submit="onSubmit"
				:is-submitting="isSubmitting"
			>
				<template #fields>
					<FormFieldText
						name="title"
						label="Название"
						placeholder="Введите название статьи"
					/>
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
