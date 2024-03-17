<template>
	<div class="flex min-h-dvh">
		<slot name="sidebar" />
		<main class="flex-grow">
			<slot />
		</main>
	</div>
</template>
