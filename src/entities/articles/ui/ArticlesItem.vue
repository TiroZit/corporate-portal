<script lang="ts" setup>
import type { IArticle } from '../model/typesArticles';

export interface IArticlesItemProps {
	article: IArticle;
}

defineProps<IArticlesItemProps>();
</script>

<template>
	<Card class="m-auto flex w-full justify-between gap-4 p-4">
		<div class="flex flex-col">
			<NuxtLink :to="`/articles/${article.id}`" class="text-3xl font-semibold">
				{{ article.title }}
			</NuxtLink>
		</div>

		<div class="flex items-center gap-3">
			<Avatar>
				<AvatarImage
					:src="article?.author.avatar_url || ''"
				/>
				<AvatarFallback>{{ article?.author.first_name.charAt(0) }}</AvatarFallback>
			</Avatar>
			{{ article?.author.first_name }}
		</div>
	</Card>
</template>
