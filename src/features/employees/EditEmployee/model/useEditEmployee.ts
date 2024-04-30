import { useToast } from '~/shared/ui/toast';

export function useEditEmployee() {
	const store = useEmployeesStore();

	async function editEmployee(id: string, data: any) {
		const { toast } = useToast();
		const { adminClient } = useSupabaseAdminClient();
		const supabaseAdminClient = await adminClient();

		const { error } = await supabaseAdminClient.auth.admin.updateUserById(id, {
			email: data.email,
			// password: data.password,
			user_metadata: {
				first_name: data.first_name,
				last_name: data.last_name,
				middle_name: data.middle_name,
				birthday: data.birthday,
			},
		});

		if (error) {
			toast({
				title: 'Ошибка!',
				description: error.message,
				variant: 'destructive',
			});
		}
		else {
			toast({
				title: 'Успех!',
				description: 'Вы отредактировали сотрудника',
				variant: 'success',
			});

			store.items = store.items.map(item => item.id === id ? { ...item, ...data } : item);
		}
	}

	return { editEmployee };
}
