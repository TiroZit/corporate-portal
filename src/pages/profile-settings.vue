<script lang="ts" setup>
import { postProfile } from '~/entities/profile/api/apiProfile';

const { data: profile, pending } = await postProfile();
</script>

<template>
	<Skeleton v-if="pending" class="h-48 w-full rounded-xl" />
	<div v-else>
		<CardProfileMain
			:avatar="profile?.avatar_url"
			:name="`${profile?.first_name} ${profile?.last_name} ${profile?.middle_name}`"
			:position="profile?.position"
			:tel="profile?.phone"
			:email="profile?.email"
		>
			<template #logout>
				<ButtonLogout />
			</template>

			<template #socials />
		</CardProfileMain>
	</div>
</template>
