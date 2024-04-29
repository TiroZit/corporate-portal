import type { IEmployeesState } from '~/entities/employees/model/typesEmployees';
import { getEmployees } from '../api/apiEmployees';

export const useEmployeesStore = defineStore('employees', {
	state: (): IEmployeesState => ({
		items: [],
	}),

	actions: {
		loadEmployees() {
			getEmployees((data) => {
				this.items = data;
			});
		},
	},
});
