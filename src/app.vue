<script setup lang="ts">
import SideBar from '~/widgets/SideBar';
</script>

<template>
	<NuxtLayout name="default">
		<template #sidebar>
			<SideBar />
		</template>
		<NuxtPage />
	</NuxtLayout>
</template>
