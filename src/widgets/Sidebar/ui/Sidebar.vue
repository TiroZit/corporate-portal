<script setup lang="ts">
import { Logo, LogoMini } from '~/shared/ui/logo';

const miniMode = ref(true);
</script>

<template>
	<aside
		:class="{ 'w-48': !miniMode, 'w-16': miniMode }"
		class="transition-width border-e bg-card p-4 text-card-foreground shadow transition-[width]"
	>
		<nav class="flex flex-col gap-6" :data-state="miniMode ? 'collapsed' : 'expanded'">
			<Logo v-show="!miniMode" @click="miniMode = !miniMode" />
			<LogoMini v-show="miniMode" @click="miniMode = !miniMode" />

			<ul>
				<li>
					<NuxtLink to="/" class="flex items-center gap-2">
						<Icon name="uil:github" size="32" />
						<span class="text-sm">
							Home
						</span>
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</aside>
</template>
