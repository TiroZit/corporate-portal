<script setup lang="ts">
import Container from '@/shared/ui/Container';
</script>

<template>
	<q-layout view="hHr LpR lFf">
		<q-page-container>
			<Container>
				<slot name="sidebar" />
				<q-page>
					<slot />
				</q-page>
			</Container>
		</q-page-container>
	</q-layout>
</template>
