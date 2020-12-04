import { atom, selectorFamily, selector } from 'recoil';
import axios from 'axios';

export const numState = atom({
	key: 'numState',
	default: {
		url: '/api/usersAll',
	},
});

export const describeUsers = selectorFamily({
	key: 'describeUsers',
	get: () => async ({ get }) => {
		const { url } = get(numState);
		const response = await axios.get(url);

		return response.data;
	},
	set: () => ({ set }, { url }) => {
		set(numState, previousState => ({ ...previousState, url }));
	},
});

export const lengthData = selector({
	key: 'lengthData',
	get: async ({ get }) => {
		const data = await get(describeUsers());

		return data.length;
	},
});

/* 

	1. recoil request 
	2. useSWR fetcher 


*/
