<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '~/shared/ui/avatar';
import { Logo, LogoMini } from '~/shared/ui/logo';

const miniMode = ref(true);
</script>

<template>
	<aside
		:class="{ 'w-48': !miniMode, 'w-16': miniMode }"
		class="transition-width border-e bg-card p-4 text-card-foreground shadow transition-[width]"
	>
		<nav class="group flex h-full flex-col gap-6" :data-state="miniMode ? 'collapsed' : 'expanded'">
			<!-- <Logo @click="miniMode = !miniMode" /> -->
			<LogoMini @click="miniMode = !miniMode" />

			<ul>
				<li>
					<NuxtLink to="/" class="flex items-center gap-2">
						<Icon name="uil:github" size="32" class="shrink-0" />
						<span class="text-sm group-data-[state=collapsed]:hidden">
							Home
						</span>
					</NuxtLink>
				</li>
			</ul>

			<ul class="mt-auto">
				<li>
					<NuxtLink to="/profile-settings">
						<Avatar>
							<AvatarImage
								src="https://github.com/shadcn.png"
								alt="Shadcn"
							/>
							<AvatarFallback>SC</AvatarFallback>
						</Avatar>
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</aside>
</template>
