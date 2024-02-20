<script setup lang="ts">

</script>

<template>
	<div class="container">
		<slot />
	</div>
</template>

<style lang="sass">
.container
	--wrapper-max-width: 100%
	--wrapper-padding: 20px

	width: min(calc(100% - var(--wrapper-padding) * 2), var(--wrapper-max-width))
	margin-inline: auto
</style>
