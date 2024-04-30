import { useToast } from '~/shared/ui/toast';

export function useDeleteEmployee() {
	const store = useEmployeesStore();

	async function deleteEmployee(id: string) {
		const { adminClient } = useSupabaseAdminClient();
		const supabaseAdminClient = await adminClient();
		const { toast } = useToast();

		const { error } = await supabaseAdminClient.auth.admin.deleteUser(id);

		if (error) {
			toast({
				title: 'Ошибка!',
				description: error.message,
				variant: 'destructive',
			});
		}
		else {
			toast({
				title: 'Успешно!',
				description: 'Сотрудник удален',
				variant: 'success',
			});

			store.items = store.items.filter(item => item.id !== id);
		}
	}

	return { deleteEmployee };
}
