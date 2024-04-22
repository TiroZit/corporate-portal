<script setup lang="ts">
interface props {
	isEdit?: boolean;
}

withDefaults(defineProps<props>(), {
	isEdit: true,
});
</script>

<template>
	<Button
		size="icon"
		type="button"
	>
		<slot>
			<Icon v-if="isEdit" name="ic:baseline-edit" size="20" class="shrink-0" />

			<Icon v-else name="ic:baseline-close" size="20" class="shrink-0" />
		</slot>
	</Button>
</template>
