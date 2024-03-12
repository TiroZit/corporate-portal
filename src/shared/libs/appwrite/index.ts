import { Account, Client, Databases, OAuthProvider, Storage } from 'appwrite';

const config = useRuntimeConfig();

export const client = new Client();

client
	.setEndpoint(config.app.APPWRITE_ENDPOINT)
	.setProject(config.app.APPWRITE_ID);

export const account = new Account(client);
export const DB = new Databases(client);
export const storage = new Storage(client);
export { ID } from 'appwrite';
