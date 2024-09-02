import { defineConfig } from 'cypress';
import { allureCypress } from 'allure-cypress/reporter';

export default defineConfig({
	e2e: {
		baseUrl: 'https://todo.qacart.com',
		video: true,
		setupNodeEvents(on, config) {
			allureCypress(on, config);
			return config;
		},
		env: {
			allure: true,
			allureAttachRequests: true,
			allureAddVideoOnPass: true
		}
	},
});