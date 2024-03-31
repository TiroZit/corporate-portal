<script setup lang="ts">
import { Divider } from '@/shared/ui/divider';

export interface ICardSettingsMainProps {
	avatar: string;
	name: string;
	position: string;
	tel: string;
	email: string;
}

defineProps<ICardSettingsMainProps>();
</script>

<template>
	<Card class="flex gap-8 p-8">
		<Avatar size="lg">
			<AvatarImage :src="avatar" />
			<AvatarFallback>{{ name }}</AvatarFallback>
		</Avatar>

		<div class="flex grow flex-col gap-5">
			<div class="flex justify-between gap-2">
				<div class="flex flex-col gap-2">
					<h1 class="text-3xl font-semibold">
						{{ name }}
					</h1>

					<div class="text-xs text-opacity-70">
						{{ position }}
					</div>
				</div>

				<slot name="logout" />
			</div>

			<Divider />

			<div class="flex justify-between gap-4">
				<div class="flex flex-col gap-1">
					<a class="text-sm" :href="`tel:${tel}`">
						{{ tel }}
					</a>

					<a class="text-sm" :href="`mailto:${email}`">
						{{ email }}
					</a>
				</div>

				<slot name="socials" />
			</div>
		</div>
	</Card>
</template>
