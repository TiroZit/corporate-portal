<script lang="ts" setup>
import { useArticlesStore } from '../model/useArticlesStore';
import ArticlesItem from './ArticlesItem.vue';

const { favorites: articles } = storeToRefs(useArticlesStore());
const { loadFavorites } = useArticlesStore();

onBeforeMount(() => {
	loadFavorites();
});
</script>

<template>
	<Card class="m-auto flex w-full flex-col gap-3 p-5">
		<ArticlesItem v-for="article in articles" :key="article.id" :article />
	</Card>
</template>
