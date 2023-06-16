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
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/about": [4],
		"/faq": [5],
		"/resources": [6],
		"/resources/blog": [7],
		"/resources/blog/spanish": [8,[2]],
		"/resources/blog/spanish/what-differentiates-spanish-from-spain-to-spanish-from-the-rest-of-the-world": [9,[2]],
		"/resources/tutoring": [10]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';