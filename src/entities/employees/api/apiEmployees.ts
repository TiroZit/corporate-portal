export async function getEmployees(callback: (data: IProfile[]) => void) {
	const client = useSupabaseClient<IProfile[]>();

	const { data } = await client
		.from('users')
		.select('*');

	if (data === null || data.length === 0)
		return;

	callback(data);
}
