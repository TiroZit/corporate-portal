<script setup lang="ts">
interface props {
	handlerSubmit: (e?: Event | undefined) => Promise<Promise<void> | undefined>;
	buttonSubmitText?: string;
	isSubmitting?: boolean;
}

const { handlerSubmit } = defineProps<props>();
</script>

<template>
	<form class="flex flex-col items-start gap-8" @submit="handlerSubmit">
		<FormTitle>
			<slot name="title" />
		</FormTitle>

		<div class="flex flex-col gap-4">
			<slot name="fields" />
		</div>

		<slot name="button-submit">
			<ButtonSubmit
				:text="buttonSubmitText"
				:is-submitting="isSubmitting"
			/>
		</slot>
	</form>
</template>
