<template>
	<NuxtLink to="/">
		<picture>
			<source
				srcset="/img/logo-dark.svg"
				type="image/svg+xml"
				media="(prefers-color-scheme: dark)"
			>
			<img
				src="/img/logo.svg"
				alt="logo"
				width="90"
			>
		</picture>
	</NuxtLink>
</template>
