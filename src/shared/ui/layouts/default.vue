<script setup lang="ts">
import Container from '@/shared/ui/Container';
</script>

<template>
	<q-layout view="hHr LpR lFf">
		<q-page-container>
			<Container>
				<q-page>
					<slot />
				</q-page>
			</Container>
		</q-page-container>
	</q-layout>
</template>
