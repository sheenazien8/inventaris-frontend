module.exports = {
	dev: {
	   	useEslint: false
	},
    rules: {
        'no-console': 'off',
    },
    extends: [
	    // ...
	    // 'eslint:recommended',
	    // ...
	    'plugin:vue/vue3-recommended',
	    "plugin:vue/base",
	    // ...
	    // "prettier",
	    // "prettier/vue",
	    // "prettier/@typescript-eslint", // required if you are using @typescript-eslint.
	    // Other settings may be required depending on the plugin you are using. See the eslint-config-prettier documentation for more details.
	],
}