// tooling
const posthtml = require('posthtml');

// plugin
module.exports = ({ tag = 'x-h' } = {}) => {
	// sectioning tags matcher
	const sectionMatch = /^(article|aside|nav|section)$/i;

	// heading tag matcher
	const headingMatch = new RegExp(`^${ tag }`, 'i');

	// var url = options && options.url || 'http://schema.org/';
	return function Schemas(tree) {
		walk(
			{
				content: tree
			},
			(node) => {
				if (
					headingMatch.test(node.tag)
				) {
					assignHeadingByNode(node, sectionMatch, headingMatch);
				}
			}
		);
	};
};

module.exports.process = (contents, options) => posthtml().use(
	module.exports(options)
).process(contents);

const walk = (node, cb) => {
	cb(node); // eslint-disable-line callback-return

	if (node.content && node.content.length) {
		// walk child nodes
		const childNodes = node.content.slice(0);
		const childNodesLength = childNodes.length;
		let childNodesIndex = -1;

		while (++childNodesIndex < childNodesLength) {
			let childNode = childNodes[childNodesIndex];

			childNode.parent = node;

			walk(childNode, cb);
		}
	}
};

// assign heading by outline depth
const assignHeadingByNode = (node, sectionMatch, headingMatch) => {
	// default level is 1
	let level = 1;

	// increase the level for each sectioning ancestor
	let ascend = node;

	let attrs = node.attrs || (node.attrs = {});

	while (ascend = ascend.parent) {
		if (sectionMatch.test(ascend.tag)) {
			++level;
		} else if (headingMatch.test(ascend.tag)) {
			return;
		}
	}

	// assign the heading role and aria-level
	attrs.role = 'heading';
	attrs['aria-level'] = level;
};
