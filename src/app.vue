<script setup lang="ts">

</script>

<template>
	<NuxtLoadingIndicator />
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
