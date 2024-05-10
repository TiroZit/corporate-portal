export function useSearchEmployee() {
	const store = useEmployeesStore();

	function searchEmployee(event: Event) {
		const target = event.target as HTMLInputElement;

		store.items = store.items.filter((item) => {
			return item.first_name.toLowerCase().includes(target.value.toLowerCase());
		});

		if (target.value === '')
			store.loadEmployees();
	}

	return { searchEmployee };
}
