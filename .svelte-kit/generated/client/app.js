export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/faq": [4],
		"/resources": [5],
		"/resources/blog": [6],
		"/resources/blog/spanish": [7],
		"/resources/blog/spanish/what-differentiates-spanish-from-spain-to-spanish-from-the-rest-of-the-world": [8],
		"/resources/tutoring": [9]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';