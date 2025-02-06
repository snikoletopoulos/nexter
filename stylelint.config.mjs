/** @type {import('stylelint').Config} */
export default {
	extends: ["stylelint-config-standard"],
	rules: {
		"import-notation": "string",
		"at-rule-no-unknown": [true, { ignoreAtRules: ["mixin", "include", "if"] }],
		"at-rule-empty-line-before": null,
		"declaration-empty-line-before": null,
		"no-descending-specificity": null,
		"media-feature-range-notation": "prefix",
		"selector-class-pattern": null,
	},
	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
};
