<script setup lang="ts">
import { postProfile } from '~/entities/profile/api/apiProfile';

const miniMode = ref(true);

const { data: profile, pending } = await postProfile();
</script>

<template>
	<aside
		:class="{ 'w-48': !miniMode, 'w-16': miniMode }"
		class="transition-width fixed inset-y-0 border-e bg-card p-4 text-card-foreground shadow transition-[width]"
	>
		<nav class="group flex h-full flex-col gap-6" :data-state="miniMode ? 'collapsed' : 'expanded'">
			<!-- <Logo @click="miniMode = !miniMode" /> -->
			<LogoMini @click="miniMode = !miniMode" />

			<ul class="flex flex-col gap-4">
				<li title="Главная">
					<NuxtLink to="/" class="flex items-center gap-2">
						<Icon name="ic:baseline-maps-home-work" size="32" class="shrink-0" />
						<span class="text-sm group-data-[state=collapsed]:hidden">
							Главная
						</span>
					</NuxtLink>
				</li>

				<li title="Сотрудники">
					<NuxtLink to="/employees" class="flex items-center gap-2">
						<Icon name="ic:outline-people-outline" size="32" class="shrink-0" />
						<span class="text-sm group-data-[state=collapsed]:hidden">
							Сотрудники
						</span>
					</NuxtLink>
				</li>

				<li title="Статьи">
					<NuxtLink to="/articles" class="flex items-center gap-2">
						<Icon name="ic:baseline-article" size="32" class="shrink-0" />
						<span class="text-sm group-data-[state=collapsed]:hidden">
							Статьи
						</span>
					</NuxtLink>
				</li>

				<li title="Избранные статьи">
					<NuxtLink to="/articles/favorites" class="flex items-center gap-2">
						<Icon name="ic:round-collections-bookmark" size="32" class="shrink-0" />
						<span class="text-sm group-data-[state=collapsed]:hidden">
							Избранные статьи
						</span>
					</NuxtLink>
				</li>
			</ul>

			<ul class="mt-auto">
				<li>
					<Skeleton
						v-if="pending"
						class="size-8 rounded-full"
					/>
					<NuxtLink v-else to="/profile-settings">
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
