import { createClient } from '@supabase/supabase-js';

const config = useRuntimeConfig();

export const useSupabaseAdminClient = defineStore('supabaseAdminClient', {
	state: () => ({
	}),

	actions: {
		async adminClient() {
			return createClient(config.public.supabase.url, config.app.supabaseServiceKey, {
				auth: {
					autoRefreshToken: false,
					persistSession: false,
				},
			});
		},
	},
});
