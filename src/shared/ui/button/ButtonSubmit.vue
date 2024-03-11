<script setup lang="ts">
interface props {
	text?: string;
	isDisabled?: boolean;
	isSubmitting?: boolean;
}

withDefaults(defineProps<props>(), {
	isDisabled: false,
});
</script>

<template>
	<Button
		:disabled="isDisabled || isSubmitting"
		:is-submitting="isSubmitting"
		type="submit"
	>
		<slot>
			{{ text }}
		</slot>
	</Button>
</template>
