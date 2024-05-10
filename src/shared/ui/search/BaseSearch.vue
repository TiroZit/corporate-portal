<script setup lang="ts">
export interface ISearchProps {
	search: (event: Event) => void;
}

defineProps<ISearchProps>();
</script>

<template>
	<div class="relative w-full max-w-sm items-center">
		<Input id="search" type="text" placeholder="Search..." class="pl-10" @input.prevent="search($event)" />
		<span class="absolute inset-y-0 start-0 flex items-center justify-center px-2">
			<Icon name="ic:baseline-search" size="24" />
		</span>
	</div>
</template>
