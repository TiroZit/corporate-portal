<template>
	<div class="flex min-h-dvh">
		<slot name="sidebar" />
		<main class="grow">
			<slot />
		</main>
	</div>
</template>
