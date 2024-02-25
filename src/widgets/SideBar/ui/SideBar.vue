<script setup lang="ts">
const drawer = ref(false);
const miniState = ref(true);
</script>

<template>
	<q-drawer
		v-model="drawer"
		show-if-above

		:mini="miniState"
		mini-to-overlay
		:width="200"
		:breakpoint="500"

		bordered
		@mouseover="miniState = false"
		@mouseout="miniState = true"
	>
		<q-scroll-area class="fit">
			<q-tabs
				vertical
			>
				<q-route-tab
					icon="home"
					to="/"
					exact
					label="Главная"
				/>
				<q-route-tab
					icon="alarm"
					to="/test"
					exact
				/>
			</q-tabs>
		</q-scroll-area>
	</q-drawer>
</template>

<style scoped lang="sass">

</style>
