<template>
	<div class="flex flex-col min-h-dvh">
		<slot name="header" />
		<main class="flex-grow">
			<slot />
		</main>
		<slot name="footer" />
	</div>
</template>
