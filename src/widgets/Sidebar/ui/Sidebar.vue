<script setup lang="ts">
import { postProfile } from '~/entities/profile/api/apiProfile';

const miniMode = ref(true);

const { data: profile } = await postProfile();
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
								:src="profile?.avatar_url || ''"
							/>
							<AvatarFallback>{{ profile?.first_name.charAt(0) }}</AvatarFallback>
						</Avatar>
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</aside>
</template>
