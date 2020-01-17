'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'

import Page404 from './Page404.vue'

import Control from './Control'
import Job from './Job'
import Files from './Files'
import Settings from './Settings'

Vue.use(VueRouter)

export const Routing = [
	// Control
	{
		icon: 'mdi-tune',
		caption: 'menu.control.caption',
		pages: [
			// Status
			{
				icon: 'mdi-information',
				caption: 'menu.job.status',
				path: '/',
				component: Job.Status
			},
			// Dashboard
			{
				icon: 'mdi-view-dashboard',
				caption: 'menu.control.dashboard',
				path: '/Dashboard',
				component: Control.Dashboard
			},
			// Console
			{
				icon: 'mdi-code-tags',
				caption: 'menu.control.console',
				path: '/Console',
				component: Control.Console
			},
			// Webcam
			{
				icon: 'mdi-photo-camera',
				caption: 'menu.job.webcam',
				path: '/Job/Webcam',
				component: Job.Webcam,
				condition: 'webcam'
			},
			// Height Map
			{
				icon: 'mdi-grid',
				caption: 'menu.control.heightmap',
				path: '/Heightmap',
				component: Control.Heightmap
			}
		]
	},
	// Files
	{
		icon: 'mdi-sd',
		caption: 'menu.files.caption',
		pages: [
			// Jobs
			{
				icon: 'mdi-play',
				caption: 'menu.files.jobs',
				path: '/Files/Jobs',
				component: Files.Jobs
			},
			// Macros
			{
				icon: 'mdi-polymer',
				caption: 'menu.files.macros',
				path: '/Files/Macros',
				component: Files.Macros
			},
			// Filaments
			/* not using it
			{
				icon: 'mdi-radiobox-marked',
				caption: 'menu.files.filaments',
				path: '/Files/Filaments',
				component: Files.Filaments
			},
			*/ 
			// Display
			{
				icon: 'mdi-format-list-numbered',
				caption: 'menu.files.display',
				path: '/Files/Display',
				component: Files.Display,
				condition: 'display'
			},
			// System
			{
				icon: 'mdi-settings',
				caption: 'menu.files.system',
				path: '/Files/System',
				component: Files.System
			}
		]
	},
	// Settings
	{
		icon: 'mdi-wrench',
		caption: 'menu.settings.caption',
		pages: [
			// General
			{
				icon: 'mdi-settings',
				caption: 'menu.settings.general',
				path: '/Settings/General',
				component: Settings.General
			},
			// Machine
			{
				icon: 'mdi-cogs',
				caption: 'menu.settings.machine',
				path: '/Settings/Machine',
				component: Settings.Machine
			}
			// Update (coming soon)
			/* {
				icon: 'mdi-update',
				caption: 'menu.settings.update',
				path: '/Settings/Update',
				component: Settings.Update
			} */
		]
	}
]

export default new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		...Routing.map(category => category.pages).reduce((a, b) => a.concat(b)),
		{
			path: '*',
			component: Page404
		}
	]
})
