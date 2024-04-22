<script setup lang="ts">
interface props {
	isDisabled?: boolean;
	isSubmitting?: boolean;
}

withDefaults(defineProps<props>(), {
	isDisabled: false,
});
</script>

<template>
	<Button
		size="icon"
		:disabled="isDisabled || isSubmitting"
		type="submit"
	>
		<slot>
			<Icon name="ic:baseline-check" size="20" class="shrink-0" />
		</slot>
	</Button>
</template>
