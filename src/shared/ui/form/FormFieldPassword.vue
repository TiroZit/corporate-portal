<template>
	<FormField
		v-slot="{ componentField }"
		name="password"
	>
		<FormItem>
			<FormLabel>Пароль</FormLabel>

			<FormControl>
				<Input
					type="password"
					placeholder="Введите пароль"
					v-bind="componentField"
				/>
			</FormControl>

			<FormMessage />
		</FormItem>
	</FormField>
</template>
