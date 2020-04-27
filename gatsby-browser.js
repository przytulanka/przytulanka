/* eslint react/prop-types:0 */
/* eslint consistent-return:0 */
import React from 'react';
import Layout from './src/layouts/index';
import { getOffset, smoothScroll } from './src/utils/index';

import './src/assets/styles/global.css';
import './src/assets/styles/fonts.css';

const shouldUpdateScroll = ({ routerProps: { location } }, opts = {}) => {
	const { offsetElement = '#navbar', duration = 1000 } = opts;

	if (location.hash.includes('#')) {
		const destinationElement = location.hash
			? document.querySelector(location.hash)
			: null;
		if (!destinationElement) return true;

		const destination = destinationElement.getBoundingClientRect().top;
		const offset = getOffset(offsetElement);

		smoothScroll(destination, offset, duration);
		return false;
	}
};

const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

export { wrapPageElement, shouldUpdateScroll };
