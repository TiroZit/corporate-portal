<script setup lang="ts">
const { items: employees } = storeToRefs(useEmployeesStore());

const { loadEmployees } = useEmployeesStore();

onBeforeMount(() => {
	loadEmployees();
});
</script>

<template>
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead class="w-[32px]" />
				<TableHead>ФИО</TableHead>
				<TableHead>Почта</TableHead>
				<TableHead>
					Подразделение
				</TableHead>
				<TableHead>
					Должность
				</TableHead>
				<TableHead />
			</TableRow>
		</TableHeader>
		<TableBody>
			<TableRow v-for="employee in employees" :key="employee.id">
				<TableCell>
					<Avatar>
						<AvatarImage
							:src="employee.avatar_url || ''"
						/>
						<AvatarFallback>{{ employee.first_name.charAt(0) }}</AvatarFallback>
					</Avatar>
				</TableCell>

				<TableCell>
					{{ employee.first_name }} {{ employee.last_name }} {{ employee.middle_name }}
				</TableCell>

				<TableCell>
					{{ employee.email }}
				</TableCell>

				<TableCell>
					{{ employee.division }}
				</TableCell>

				<TableCell>
					{{ employee.position }}
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</template>
