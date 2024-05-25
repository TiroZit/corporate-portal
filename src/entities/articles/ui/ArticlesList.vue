<script lang="ts" setup>
import { useArticlesStore } from '../model/useArticlesStore';
import ArticlesItem from './ArticlesItem.vue';

const { items: articles } = storeToRefs(useArticlesStore());
const { loadArticles } = useArticlesStore();

onBeforeMount(() => {
	loadArticles();
});
</script>

<template>
	<Card class="m-auto flex w-full flex-col gap-3 p-5">
		<ArticlesItem v-for="article in articles" :key="article.id" :article />
	</Card>
</template>
