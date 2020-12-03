import { atom, selector } from 'recoil';
import axios from 'axios';

export const numState = atom({
	key: 'numState',
	default: 0,
});

export const describeUsers = selector({
	key: 'describeUsers',
	get: async () => {
		const response = await axios.get('/api/users');

		return response.data;
	},
});
