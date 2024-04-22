<script setup lang="ts">
export interface IFormFieldTextProps {
	name: string;
	label: string;
	placeholder?: string;
	type?: string;
	disabled?: boolean;
	readonly?: boolean;
}

withDefaults(defineProps<IFormFieldTextProps>(), {
	type: 'text',
});
</script>

<template>
	<FormField
		v-slot="{ componentField }"
		:name
	>
		<FormItem>
			<FormLabel>{{ label }}</FormLabel>

			<FormControl>
				<Input
					:type
					:placeholder
					:disabled
					:readonly
					v-bind="componentField"
				/>
			</FormControl>

			<FormMessage />
		</FormItem>
	</FormField>
</template>
