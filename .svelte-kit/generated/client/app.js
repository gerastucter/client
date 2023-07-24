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
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [];

export const dictionary = {
		"/": [4],
		"/about": [5],
		"/faq": [6],
		"/resources": [7],
		"/resources/blog": [8],
		"/resources/blog/spanish": [9,[2]],
		"/resources/blog/spanish/what-differentiates-spanish-from-spain-to-spanish-from-the-rest-of-the-world": [10,[2,3]],
		"/resources/ebooks": [11],
		"/resources/ebooks/top-10-steps-to-become-a-poliglot-by-yourself-and-without-spending-money-ebook-demo": [12],
		"/resources/tutoring": [13],
		"/resources/tutoring/japanese-learning-map-with-only-free-tools": [14]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';