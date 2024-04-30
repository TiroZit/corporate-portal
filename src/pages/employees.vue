<script setup lang="ts">

</script>

<template>
	<div class="flex flex-col gap-4">
		<PageHeader title="Сотрудники">
			<div class="flex justify-between">
				<AddNewEmployee />
			</div>
		</PageHeader>

		<EmployeesList>
			<template #actions="actionsProps">
				<div class="flex gap-3">
					<EditEmployee :employee="actionsProps.employee" />
					<DeleteEmployee :id="actionsProps.employee.id || ''" />
				</div>
			</template>
		</EmployeesList>
	</div>
</template>
