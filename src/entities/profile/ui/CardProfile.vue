<script setup lang="ts">
export interface ICardSettingsProps {
	title: string;
}

defineProps<ICardSettingsProps>();
</script>

<template>
	<Card class="m-auto flex w-full gap-8 p-8">
		<h2 class="basis-96 text-xl font-semibold">
			{{ title }}
		</h2>

		<slot />
	</Card>
</template>
