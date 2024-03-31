<template>
	<div class="flex min-h-dvh">
		<slot name="sidebar" />
		<main class="grow p-4">
			<slot />
		</main>
	</div>
</template>
