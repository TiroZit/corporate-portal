<script lang="ts" setup>
import moment from 'moment';

const { id } = useRoute().params;

const { getArticle } = useArticlesStore();

const article = computed(() => getArticle(Number(id)));
</script>

<template>
	<div class="mb-8 max-w-5xl text-6xl font-semibold">
		{{ article?.title }}
	</div>
	<div class="">
		Дата публикации: {{ moment(article?.created_at).locale('ru').format('LLL') }}
	</div>

	<div class="mt-4 flex gap-3">
		<AddToFavorite :id="id as string" />
	</div>

	<EditArticle
		v-if="article"
		:article-id="id as string"
		:content="JSON.parse(article?.content
			|| '[{}]',
		)"
	/>
</template>
