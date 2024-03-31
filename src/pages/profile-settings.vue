<script lang="ts" setup>
import { CardProfileMain } from '~/entities/profile';
</script>

<template>
	<CardProfileMain
		avatar="https://github.com/shadcn.png"
		name="John Doe"
		position="Senior Developer"
		tel="+7 (999) 999-99-99"
		email="qKuZB@example.com"
	>
		<template #logout>
			<ButtonLogout2 />
		</template>

		<template #socials />
	</CardProfileMain>
</template>

<style>

</style>
