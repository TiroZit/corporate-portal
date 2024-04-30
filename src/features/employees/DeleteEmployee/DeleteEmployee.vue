<script lang="ts" setup>
export interface IDeleteEmployeeProps {
	id: string;
}

defineProps<IDeleteEmployeeProps>();

const { deleteEmployee } = useDeleteEmployee();
</script>

<template>
	<Button size="icon" @click="deleteEmployee(id)">
		<Icon name="ic:baseline-delete-forever" size="20" class="shrink-0" />
	</Button>
</template>
