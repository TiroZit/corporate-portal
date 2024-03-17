<script setup lang="ts">
import { Sidebar } from '@/widgets/Sidebar';
</script>

<template>
	<NuxtLayout>
		<template #sidebar>
			<Sidebar />
		</template>
		<template #default>
			<NuxtPage />
		</template>
	</NuxtLayout>
	<Toaster />
</template>
