/* eslint-disable no-undef */
import { useEffect, useState } from 'react';

const useImageSize = imageUrl => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		const image = new Image();
		image.src = imageUrl;

		image.onload = function () {
			setWidth(image.width);
			setHeight(image.height);
		};
	}, []);

	return [width, height];
};

export default useImageSize;
