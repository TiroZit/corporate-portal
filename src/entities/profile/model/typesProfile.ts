export interface IProfile {
	id: string;
	email: string;
	phone: string;
	position: string;
	avatar_url: string;
	first_name: string;
	last_name: string;
	middle_name: string;
	birthday: string;
	about_me: string;
	intersts_competence: string;
	division: string;
	telegram: string;
	whatsapp: string;
	viber: string;
}

export interface IProfilePersonal extends Pick<
	IProfile,
	'first_name' |
	'last_name' |
	'middle_name' |
	'birthday'
> {}
