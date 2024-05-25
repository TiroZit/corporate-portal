<script lang="ts" setup>
const { id } = useRoute().params;
</script>

<template>
	<div>Article: {{ id }}</div>
</template>
