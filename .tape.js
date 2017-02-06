module.exports = {
	'posthtml-hfill': {
		'basic': {
			message: 'supports <x-h> usage'
		},
		'basic:h': {
			message: 'ignores <x-h> usage with { tag: "h" }',
			options: {
				tag: 'h'
			}
		},
		'h': {
			message: 'ignores <h> usage'
		},
		'h:h': {
			message: 'supports <h> usage with { tag: "h" }',
			options: {
				tag: 'h'
			}
		}
	}
};
