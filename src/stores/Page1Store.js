import { atom, selectorFamily, selector } from 'recoil';
import axios from 'axios';

export const numState = atom({
	key: 'numState',
	default: {
		url: '/api/usersAll',
	},
});

// export const describeUsers = selectorFamily({
// 	key: 'describeUsers',
// 	get: () => async ({ get }) => {
// 		const { url, type } = get(numState);
// 		let response = null;

// 		switch (type) {
// 			case '过滤':
// 				response = await axios.get(url);
// 				break;
// 			case '删除':
// 				response = await axios.get(url);
// 				break;
// 			default:
// 				response = await axios.get(url);
// 				break;
// 		}

// 		return response.data;
// 	},
// 	set: () => ({ set }, payload) => {
// 		set(numState, previousState => ({ ...previousState, ...payload }));
// 	},
// });

// export const lengthData = selector({
// 	key: 'lengthData',
// 	get: async ({ get }) => {
// 		const data = await get(describeUsers());

// 		return data.length;
// 	},
// });

/* 

	1. recoil request 
	2. useSWR fetcher 


*/
