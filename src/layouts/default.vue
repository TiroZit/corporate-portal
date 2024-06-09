<template>
	<div class="flex min-h-dvh">
		<slot name="sidebar" />
		<main class="ml-16 grow p-4">
			<slot />
		</main>
	</div>
</template>
