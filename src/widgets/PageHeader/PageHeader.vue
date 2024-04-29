<script setup lang="ts">
export interface IPageHeaderProps {
	title: string;
}

defineProps<IPageHeaderProps>();
</script>

<template>
	<Card class="m-auto flex w-full flex-col gap-10 p-8">
		<h1 class="text-6xl font-semibold">
			{{ title }}
		</h1>

		<slot />
	</Card>
</template>
