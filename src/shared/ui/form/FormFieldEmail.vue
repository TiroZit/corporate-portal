<template>
	<FormField
		v-slot="{ componentField }"
		name="email"
	>
		<FormItem>
			<FormLabel>E-mail</FormLabel>

			<FormControl>
				<Input
					type="text"
					placeholder="Введите E-mail"
					v-bind="componentField"
				/>
			</FormControl>

			<FormMessage />
		</FormItem>
	</FormField>
</template>
