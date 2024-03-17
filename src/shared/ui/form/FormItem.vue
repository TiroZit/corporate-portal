<script lang="ts">
import type { InjectionKey } from 'vue';
import { defineComponent, provide } from 'vue';
import { useId } from 'radix-vue';
import { cn } from '@/shared/utils';

// eslint-disable-next-line
export const FORM_ITEM_INJECTION_KEY = Symbol() as InjectionKey<string>;

export default defineComponent({
	props: {
		classProps: {
			type: String,
			default: '',
		},
	},
	setup() {
		const id = useId();
		provide(FORM_ITEM_INJECTION_KEY, id);

		return {
			cn,
		};
	},
});
</script>

<template>
	<div :class="cn('space-y-2', classProps)">
		<slot />
	</div>
</template>
