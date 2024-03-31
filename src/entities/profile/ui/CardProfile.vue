<script setup lang="ts">
export interface ICardSettingsProps {
	title: string;
}

defineProps<ICardSettingsProps>();
</script>

<template>
	<Card class="m-auto flex w-fit gap-8 p-8">
		<div class="basis-96 text-xl font-semibold">
			{{ title }}
		</div>

		<slot />
	</Card>
</template>
