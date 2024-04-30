<script setup lang="ts">
interface props {
	handlerSubmit: (e?: Event | undefined) => Promise<Promise<void> | undefined>;
	buttonSubmitText?: string;
	isSubmitting?: boolean;
	classFields?: string;
}

const { handlerSubmit } = defineProps<props>();
</script>

<template>
	<form class="flex flex-col items-start gap-8" @submit="handlerSubmit">
		<FormTitle v-if="$slots.title">
			<slot name="title" />
		</FormTitle>

		<div class="flex flex-col gap-4" :class="classFields">
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
