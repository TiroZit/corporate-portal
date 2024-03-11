<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import { cn } from '@/shared/utils';

const props = defineProps<{
	class?: HTMLAttributes['class'];
}>();
</script>

<template>
	<legend
		:class="cn('text-4xl', props.class)"
	>
		<slot />
	</legend>
</template>
