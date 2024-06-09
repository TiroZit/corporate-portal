<script lang="ts" setup>
export interface IAddToFavoriteProps {
	id: string;
}

defineProps<IAddToFavoriteProps>();

const { addFavorite, checkFavorite, removeFavorite } = useArticlesStore();
</script>

<template>
	<Button
		v-if="!checkFavorite(Number(id))"
		variant="outline"
		class="gap-2 border-0"
		@click="addFavorite(Number(id))"
	>
		Добавить в избранное
		<Icon name="ic:baseline-star-border" size="20" class="shrink-0" />
	</Button>

	<Button
		v-else
		variant="outline"
		class="gap-2 border-0"
		@click="removeFavorite(Number(id))"
	>
		Убрать из избранного
		<Icon name="ic:baseline-star" size="20" class="shrink-0" />
	</Button>
</template>

<style>

</style>
